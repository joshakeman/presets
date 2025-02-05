require("dotenv").config({ path: ".env.local" }); // ✅ Load Cloudinary credentials
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const baseDir = "public/images/"; // ✅ Set base directory for images

// ✅ Function to recursively find all images in the folder
const getAllImages = (dir, fileList = []) => {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    return [];
  }

  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllImages(filePath, fileList);
    } else if (/\.(jpg|jpeg|png|webp|avif)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
};

// ✅ Function to check if an image exists in Cloudinary
const cloudinaryImageExists = async (imagePath) => {
  try {
    await cloudinary.api.resource(imagePath);
    return true; // ✅ Image exists
  } catch (error) {
    if (error.http_code === 404) return false; // ❌ Image does not exist
    throw error; // Other errors
  }
};

// ✅ Function to upload new images
const syncImages = async () => {
  console.log("🔍 Checking for new images to upload...");
  const images = getAllImages(baseDir);

  if (images.length === 0) {
    console.log("✅ No new images found.");
    return;
  }

  for (const imagePath of images) {
    const relativePath = imagePath.replace(baseDir, ""); // ✅ Remove "public/images/" from path
    const cloudinaryPath = `images/${relativePath}`.replace(/\\/g, "/"); // ✅ Convert Windows paths

    console.log(`🔍 Checking if image exists in Cloudinary: ${cloudinaryPath}`);

    const exists = await cloudinaryImageExists(cloudinaryPath);

    if (!exists) {
      console.log(`🚀 Uploading: ${imagePath} → ${cloudinaryPath}`);
      await cloudinary.uploader.upload(imagePath, {
        public_id: cloudinaryPath, // ✅ Ensures Cloudinary path matches local
        folder: path.dirname(cloudinaryPath),
      });
    } else {
      console.log(`✅ Already exists in Cloudinary: ${cloudinaryPath}`);
    }
  }

  console.log("🎉 Image sync complete!");
};

// Run the sync function
syncImages().catch((err) => console.error("❌ Sync failed:", err));
