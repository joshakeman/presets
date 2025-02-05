import React from "react";
import Image from "next/image";
import BlurredImage from "../blurred-slider-image";
import starsLeft from "../../public/images/hero-image/stars-left.webp";
import starsRight from "../../public/images/hero-image/stars-right.webp";
import logo from "../../public/images/hero-image/logo-w-background.webp";

export default function Planets() {
  return (
    <section
      className="flex min-w-fit mt-4 mb-4 items-center"
      aria-labelledby="planetary-decor"
    >
      {/* Left Stars (Decorative) */}
      <div className="w-2/6 flex-1">
        {/* <BlurredImage
          className="grow"
          src={"/images/hero-image/stars-left.webp"}
          alt="" // ✅ Empty alt for decorative images
          aria-hidden="true" // ✅ Hides from screen readers
        /> */}
        <Image
          src={starsLeft}
          alt="stars background"
          width={400}
          height={400}
          placeholder="blur"
          aria-hidden="true"
        />
      </div>

      {/* Center Logo (Important Image) */}
      <div className="w-2/6 flex-none">
        {/* <BlurredImage
          className="grow"
          src="/images/hero-image/logo-w-background.webp"
          alt="Site logo" // ✅ Now meaningful for screen readers
          role="img"
          aria-labelledby="site-logo"
        /> */}
        <Image
          src={logo}
          alt="stars background"
          width={400}
          height={400}
          placeholder="blur"
          aria-hidden="true"
        />
      </div>

      {/* Right Stars (Decorative) */}
      <div className="w-2/6 flex-1">
        {/* <BlurredImage
          className="grow"
          src="/images/hero-image/stars-right.webp"
          alt="" // ✅ Empty alt for decorative images
          aria-hidden="true" // ✅ Hides from screen readers
        /> */}
        <Image
          src={starsRight}
          alt="stars background"
          width={400}
          height={400}
          placeholder="blur"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
