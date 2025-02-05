require("dotenv").config({ path: ".env.local" }); // ✅ Load .env.local
const cloudinary = require("cloudinary").v2;

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Upload a sample image
cloudinary.uploader.upload(
  "public/images/curl.jpg",
  {
    folder: "test-folder",
  },
  (error, result) => {
    if (error) console.error("Upload failed:", error);
    else console.log("✅ Image uploaded successfully:", result.secure_url);
  }
);
