import React, { useState } from "react";
import Image from "next/image";

export default function BlurredImage({
  src,
  alt,
  width,
  height,
  startingColor = "#DCD9F2",
  parentWidth = "w-full",
  priority = false,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={`relative ${parentWidth}`}>
      {/* Blurred Loading Placeholder */}
      <div
        className={`absolute inset-0 bg-[${startingColor}] transition-all duration-700 
        ${isLoaded ? "opacity-0" : "opacity-100 blur-lg"}`}
      ></div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        // className={`transition-all duration-700 ${
        //   isLoaded ? "opacity-100 blur-0" : "opacity-0"
        // }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
