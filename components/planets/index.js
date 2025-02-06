import React from "react";
import Image from "next/image";
import starsLeft from "../../public/images/hero-image/stars-left.png";
import starsRight from "../../public/images/hero-image/stars-right.png";
import logo from "../../public/images/hero-image/logo-no-background.png";

export default function Planets() {
  return (
    <section
      className="flex min-w-fit mt-4 mb-4 items-center"
      aria-labelledby="hero-heading"
    >
      {/* Hidden Heading for Screen Readers */}
      <h1 id="hero-heading" className="sr-only">
        Welcome to Photo Presets
      </h1>

      {/* Left Stars (Decorative) */}
      <div className="w-2/6 flex-1">
        <Image
          src={starsLeft}
          alt="" // Empty alt makes it decorative
          width={400}
          height={400}
          placeholder="blur"
          role="presentation"
          priority
        />
      </div>

      {/* Center Logo (Important Image) */}
      <div className="w-2/6 flex-none">
        <Image
          src={logo}
          alt="Site Logo, which looks like a ringed planet with the words Photo Presets" // Descriptive alt text for screen readers
          width={400}
          height={400}
          placeholder="blur"
          priority
        />
      </div>

      {/* Right Stars (Decorative) */}
      <div className="w-2/6 flex-1">
        <Image
          src={starsRight}
          alt="" // Empty alt makes it decorative
          width={400}
          height={400}
          placeholder="blur"
          role="presentation"
          priority
        />
      </div>
    </section>
  );
}
