import React from "react";
import Image from "next/image";
import BlurredImage from "../blurred-slider-image";

export default function Planets() {
  return (
    <section
      className="flex min-w-fit mt-4 mb-4 items-center"
      aria-labelledby="planetary-decor"
    >
      {/* Left Stars (Decorative) */}
      <div className="w-2/6 flex-1">
        <BlurredImage
          className="grow"
          src="/images/hero-image/stars-left.webp"
          alt="" // ✅ Empty alt for decorative images
          aria-hidden="true" // ✅ Hides from screen readers
        />
      </div>

      {/* Center Logo (Important Image) */}
      <div className="w-2/6 flex-none">
        <BlurredImage
          className="grow"
          src="/images/hero-image/logo-w-background.webp"
          alt="Site logo" // ✅ Now meaningful for screen readers
          role="img"
          aria-labelledby="site-logo"
        />
      </div>

      {/* Right Stars (Decorative) */}
      <div className="w-2/6 flex-1">
        <BlurredImage
          className="grow"
          src="/images/hero-image/stars-right.webp"
          alt="" // ✅ Empty alt for decorative images
          aria-hidden="true" // ✅ Hides from screen readers
        />
      </div>
    </section>
  );
}
