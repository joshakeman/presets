// scripts/syncImages.js
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { Dropbox } from "dropbox";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import { dirname } from "path";

const dbx = new Dropbox({ accessToken: process.env.DROPBOX_TOKEN, fetch });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// (Optional initial check of root entries)
const { result: rootResult } = await dbx.filesListFolder({ path: "" });
console.log("📁 Found root entries:");
rootResult.entries.forEach((e) => console.log(`- ${e.name} (${e[".tag"]})`));

const DROPBOX_SOURCE_FOLDER = "/josh-and-brad/photo-presets/collections";
const LOCAL_OUTPUT_DIR = path.join(__dirname, "../public/images/collections");

const revStorePath = path.join(__dirname, "imageRevisions.json");
let revStore = {};

if (fs.existsSync(revStorePath)) {
  revStore = JSON.parse(fs.readFileSync(revStorePath, "utf-8"));
}

async function syncImages() {
  const { result } = await dbx.filesListFolder({
    path: DROPBOX_SOURCE_FOLDER,
    recursive: true,
  });

  if (!fs.existsSync(LOCAL_OUTPUT_DIR)) {
    fs.mkdirSync(LOCAL_OUTPUT_DIR, { recursive: true });
  }

  const imageEntries = result.entries.filter(
    (entry) => entry[".tag"] === "file" && /\.(jpe?g|png)$/i.test(entry.name)
  );

  for (const entry of imageEntries) {
    const dropboxPath = entry.path_lower;
    const rev = entry.rev;

    // Step 3: Skip unchanged files
    if (revStore[dropboxPath] === rev) {
      console.log(`⏩ Skipping unchanged file: ${dropboxPath}`);
      continue;
    }

    const relativePath = entry.path_display.replace(DROPBOX_SOURCE_FOLDER, "");
    const localPath = path.join(
      LOCAL_OUTPUT_DIR,
      relativePath.replace(/\.[^/.]+$/, ".webp") // convert extension
    );

    // Ensure subfolder exists
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const { result: fileResult } = await dbx.filesDownload({
      path: entry.path_lower,
    });
    const buffer =
      fileResult.fileBinary ||
      Buffer.from(await fileResult.fileBlob.arrayBuffer());

    await sharp(buffer).resize(1600).webp({ quality: 80 }).toFile(localPath);

    // ✅ Step 3: Store the new rev after conversion
    revStore[dropboxPath] = rev;

    console.log(`✅ ${entry.name} → ${localPath}`);
  }

  // ✅ Step 4: Save revStore to file
  fs.writeFileSync(revStorePath, JSON.stringify(revStore, null, 2));
  console.log("💾 Saved revision map");
  console.log("🎉 Sync complete!");
}

syncImages().catch((err) => {
  console.error("❌ Error syncing images:", err);
});
