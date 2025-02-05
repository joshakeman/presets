require("dotenv").config({ path: ".env.local" }); // ✅ Load .env.local manually

const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

// ✅ Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log(
  "Using Cloudinary account:",
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
);

// ✅ Function to recursively find all images
const getAllImages = (dir, fileList = []) => {
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

// ✅ Upload images while preserving folder structure
const uploadImages = async () => {
  const baseDir = "public/images/";
  const images = getAllImages(baseDir);

  for (const imagePath of images) {
    const relativePath = imagePath.replace(baseDir, ""); // Remove "public/images/"
    const cloudinaryPath = `images/${relativePath}`.replace(/\\/g, "/"); // Convert Windows paths

    console.log(`Uploading: ${imagePath} → ${cloudinaryPath}`);

    await cloudinary.uploader.upload(imagePath, {
      folder: path.dirname(cloudinaryPath),
    });
  }

  console.log("✅ All images uploaded successfully!");
};

uploadImages().catch(console.error);
