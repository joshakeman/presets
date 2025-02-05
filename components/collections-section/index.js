import React from "react";
import Image from "next/image";
import lit1 from "../../public/images/menu-lit-1-flat.webp";
import { useCart } from "../../hooks/useCart";

export default function CollectionsSection() {
  const { addToCart } = useCart();
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -m-2">
        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
          <div className="relative pb-1/1">
            <div className="absolute inset-0">
              <Image
                src={lit1}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <h3 className="french-news self-start mt-3">
            The inaugural literary collection features 20 presets from authors
            Fitzgerald, Poe, Austen and Dickens
          </h3>
          <div className="flex flex-row flex-wrap justify-around gap-2">
            <button
              className="menu-btn-lg-gold bourbonbase text-base md:text-lg lg:text-xl"
              onClick={() =>
                addToCart({ name: "thingy", price: 55.0, quantity: 1 })
              }
            >
              <a className="" href="">
                I'll have it forthwith
              </a>
            </button>
            <button className="menu-btn bourbonbase menu-text text-base md:text-lg lg:text-xl ">
              <a href="/collections/literary/first">Let me have a look</a>
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
          <div className="relative pb-1/1">
            <div className="absolute inset-0">
              <Image
                src={lit1}
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
          <div className="relative pb-1/1">
            <div className="absolute inset-0">
              <Image
                src={lit1}
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
          <div className="relative pb-1/1">
            <div className="absolute inset-0">
              <Image
                src={lit1}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
          <div className="relative pb-1/1">
            <div className="absolute inset-0">
              <Image
                src={lit1}
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
          <div className="relative pb-1/1">
            <div className="absolute inset-0">
              <Image
                src={lit1}
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
