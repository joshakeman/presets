const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Path to your images folder
const imagesDir = path.join(__dirname, "public", "images");

// Function to recursively process all files in a directory
const processDirectory = async (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(filePath);
    } else if (
      file.toLowerCase().endsWith(".jpg") ||
      file.toLowerCase().endsWith(".jpeg")
    ) {
      // Convert JPG to WebP
      const webpPath = filePath.replace(/\.(jpg|jpeg)$/i, ".webp");

      try {
        await sharp(filePath).toFormat("webp").toFile(webpPath);

        console.log(`✅ Converted: ${filePath} → ${webpPath}`);
      } catch (error) {
        console.error(`❌ Failed to convert ${filePath}:`, error);
      }
    }
  }
};

// Run the script
(async () => {
  console.log(`🔄 Scanning "${imagesDir}" for JPG files...`);
  await processDirectory(imagesDir);
  console.log("🎉 All JPG images converted to WebP!");
})();
