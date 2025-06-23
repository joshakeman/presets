// import Image from "next/image";
// import { useState } from "react";

// export default function BlurredImage({
//   src,
//   alt,
//   width = 1200,
//   aspectRatio = 3 / 2,
// }) {
//   const height = Math.round(width / aspectRatio);
//   const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

//   // ✅ Detect if image is a local file (starts with "/images/")
//   const isLocalImage = src.startsWith("/images/");

//   // ✅ Cloudinary URL format (convert local paths)
//   const optimizedSrc = isLocalImage
//     ? `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto,w_${width},h_${height}${src}`
//     : src; // If it's already a Cloudinary URL, use it as is

//   // ✅ Default Placeholder Image
//   const placeholder = `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto,w_800,h_600/v1699999999/placeholder.jpg`;

//   // ✅ State to track if the image failed to load
//   const [imageSrc, setImageSrc] = useState(optimizedSrc);

//   return (
//     <Image
//       src={src}
//       alt={alt}
//       width={width}
//       height={height}
//       layout="responsive"
//       loading="lazy"
//       onError={() => setImageSrc(placeholder)} // ✅ Swap to placeholder if image fails
//     />
//   );
// }

import { useState } from "react";
import { ReactCompareSliderImage } from "react-compare-slider";

export default function BlurredSliderImage({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full">
      {/* Blurred Loading Placeholder */}
      <div
        className={`absolute inset-0 bg-gray-300 transition-all duration-700 
        ${isLoaded ? "opacity-0" : "opacity-100 blur-lg"}`}
      ></div>

      {/* Actual Image */}
      <ReactCompareSliderImage
        src={src}
        alt={alt}
        className={`transition-all duration-700 ${
          isLoaded ? "opacity-100 blur-0" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
