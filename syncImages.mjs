// scripts/syncImages.mjs

/**
 * Sync images from Dropbox folders into your project's public/images directory.
 *
 * Supports folders: "collections" and "assets"
 * Modes:
 *  - default: processes "collections"
 *  - assets: processes "assets"
 *  - all: processes both
 * Use --force to re-download & convert everything regardless of revision.
 */

// scripts/syncImages.mjs
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { Dropbox } from "dropbox";
import fetch from "node-fetch";
import process from "process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const dbx = new Dropbox({
  accessToken: process.env.DROPBOX_TOKEN,
  fetch,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DROPBOX_ROOT = "/josh-and-brad/photo-presets";
const SUPPORTED = ["collections", "assets"];

// Parse flags
const args = process.argv.slice(2);
const FORCE_ALL = args.includes("--force");

// Find mode among flags (default if not provided)
const modeArg = args.find((a) => a.startsWith("--mode="));
const mode = modeArg ? modeArg.split("=")[1].toLowerCase() : "default";

// Validate mode value
if (!["default", "assets", "all"].includes(mode)) {
  console.error(
    `Error: --mode must be default, assets, or all. You passed '${mode}'.`
  );
  process.exit(1);
}

// Determine which folders to sync
const foldersToSync =
  mode === "all" ? SUPPORTED : mode === "assets" ? ["assets"] : ["collections"];

console.log("Mode:", mode);
console.log("Folders to sync:", foldersToSync);

const LOCAL_IMAGE_BASE = path.join(__dirname, "public/images");
const REV_STORE = path.join(__dirname, "imageRevisions.json");

let revStore = {};
if (fs.existsSync(REV_STORE)) {
  revStore = JSON.parse(fs.readFileSync(REV_STORE, "utf-8"));
  console.log(
    "✔️ Loaded revision store:",
    Object.keys(revStore).length,
    "entries"
  );
} else {
  console.log("ℹ️ No revision store — starting fresh");
}

async function syncFolder(folderName) {
  const dropboxFolder = `${DROPBOX_ROOT}/${folderName}`;
  console.log(`\n➡️ Starting sync for Dropbox folder: ${dropboxFolder}`);

  let listRes;
  try {
    listRes = await dbx.filesListFolder({
      path: dropboxFolder,
      recursive: true,
    });
  } catch (e) {
    console.error(`❌ Error listing folder "${folderName}":`, e);
    return;
  }

  const { entries } = listRes.result;
  console.log(`• Dropbox entries for "${folderName}": ${entries.length}`);

  const localBase = path.join(LOCAL_IMAGE_BASE, folderName);
  if (!fs.existsSync(localBase)) {
    fs.mkdirSync(localBase, { recursive: true });
    console.log(`✔️ Created local dir: ${localBase}`);
  }

  const images = entries.filter(
    (e) => e[".tag"] === "file" && /\.(jpe?g|png)$/i.test(e.name)
  );
  console.log(`• Image files to process in "${folderName}": ${images.length}`);
  if (!images.length)
    console.log(`⚠️ No images found in Dropbox "${folderName}"`);

  for (const entry of images) {
    const dbPath = entry.path_lower;
    const rev = entry.rev;
    console.log(`\n   ↪️ File: ${entry.path_display} (rev: ${rev})`);

    if (!FORCE_ALL && revStore[dbPath] === rev) {
      console.log("    ⏭️ Skipping — unchanged");
      continue;
    }

    const relative = entry.path_display
      .replace(`${DROPBOX_ROOT}/${folderName}/`, "")
      .replace(/\.[^.]+$/, ".webp");

    const localPath = path.join(localBase, relative);
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log("    📁 Created directory:", dir);
    }

    try {
      const fileResult = await downloadWithRetry(entry.path_display);
      console.log("    ↓ Downloaded");

      const buffer = fileResult.result.fileBinary
        ? Buffer.from(fileResult.result.fileBinary)
        : Buffer.from(await fileResult.result.fileBlob.arrayBuffer());

      await sharp(buffer).resize(1600).webp({ quality: 80 }).toFile(localPath);
      revStore[dbPath] = rev;
      console.log("    ✅ Saved to:", localPath);
    } catch (err) {
      console.error(
        `❗ Failed after retries: ${entry.path_display}`,
        err.code || err.message
      );
    }
  }
}

// Runner
(async () => {
  for (const folder of foldersToSync) {
    await syncFolder(folder);
  }

  fs.writeFileSync(REV_STORE, JSON.stringify(revStore, null, 2));
  console.log("\n💾 Finished! Revision history saved.");
})();

async function downloadWithRetry(path, retries = 3) {
  for (let i = 1; i <= retries; i++) {
    try {
      return await dbx.filesDownload({ path });
    } catch (err) {
      if (["ETIMEDOUT", "ENOTFOUND"].includes(err.code) && i < retries) {
        console.warn(`⚠️ Retry ${i} failed for ${path}, retrying...`);
        await new Promise((r) => setTimeout(r, 1000 * i));
        continue;
      }
      throw err;
    }
  }
}
