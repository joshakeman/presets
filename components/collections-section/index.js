import React from "react";
import Image from "next/image";
import lit1 from "../../public/images/menu-lit-1-flat.webp";
import { useCart } from "../../hooks/useCart";
import Link from "next/link";

export default function CollectionsSection() {
  const { addToCart } = useCart();

  return (
    <section
      className="container mx-auto p-4"
      aria-labelledby="collections-heading"
    >
      {/* Accessible Heading for the Section */}
      <h2 id="collections-heading" className="text-3xl font-bold sr-only">
        Explore Our Literary Collections
      </h2>

      <div className="flex flex-wrap -m-2">
        {/* Collections */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div className="relative pb-1/1">
              <div className="absolute inset-0">
                <Link href="/collections/literary/first">
                  <Image
                    src={lit1}
                    alt="Cover of the inaugural literary collection"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </Link>
              </div>
            </div>
            <h3 className="french-news self-start mt-3">
              The inaugural literary collection features 20 presets from authors
              Fitzgerald, Poe, Austen, and Dickens
            </h3>
            <div className="flex flex-row flex-wrap justify-around">
              {/* Button for Adding to Cart */}
              <button
                className="bg-[#CE790A] border-2 border-black py-2 px-6 w-[30%] sm:w-[50%] md:w-[45%] lg:w-[50%] bourbonbase text-base md:text-lg lg:text-xl whitespace-nowrap"
                // bg-[#CE790A] border-2 border-black py-2 px-6 w-[30%] sm:w-[50%] md:w-[45%] lg:w-[40%]
                onClick={() =>
                  addToCart({
                    name: "Literary Collection",
                    price: 55.0,
                    quantity: 1,
                  })
                }
                aria-label="Add Literary Collection to cart"
              >
                I'll have it
              </button>

              {/* Navigation Button */}
              <Link
                href="/collections/literary/first"
                className="bg-black border-2 border-[#CE790A] py-2 px-6 w-[30%] sm:w-[50%] md:w-[45%] lg:w-[50%] bourbonbase menu-text text-base md:text-lg lg:text-xl whitespace-nowrap"
              >
                Let me have a look
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
