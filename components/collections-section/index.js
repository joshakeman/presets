import React from "react";
import Image from "next/image";
import { products } from "../../lib/products";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../context/CartContext";
import AddToCartButton from "../add-to-cart-button";
import Link from "next/link";

export default function CollectionsSection() {
  const { user } = useAuth();
  const { cart, addToCart, removeFromCart } = useCart(user);

  return (
    <section
      className="container mx-auto p-4"
      aria-labelledby="collections-heading"
    >
      {/* Accessible Heading for the Section */}
      <h2 id="collections-heading" className="text-3xl font-bold sr-only">
        Explore Our Literary Collections
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Collections */}
        {Object.entries(products).map(([slug, prod]) => (
          <div
            key={slug}
            className="rounded border border-[#CE790A] bg-[#262626] text-white p-4 shadow-md hover:shadow-lg transition"
          >
            <div className="relative pb-1/1">
              <div className="absolute inset-0">
                <Link href={`/collections/${prod.href}`}>
                  <Image
                    src={prod.menuImage}
                    alt={prod.menuImageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </Link>
              </div>
            </div>
            <h3 className="french-news self-start mt-3">{prod.description}</h3>
            <div className="flex flex-row flex-wrap justify-around">
              {/* Button for Adding to Cart */}
              <AddToCartButton item={prod} />
              {/* <button
                className="w-full sm:w-1/2 bg-[#CE790A] text-black border-2 border-black px-4 py-2 text-center"
                // bg-[#CE790A] border-2 border-black py-2 px-6 w-[30%] sm:w-[50%] md:w-[45%] lg:w-[40%]
                onClick={() =>
                  addToCart({
                    name: "Literary Collection",
                    price: `${prod.price}`,
                    quantity: 1,
                  })
                }
                aria-label="Add Literary Collection to cart"
              >
                I'll have it
              </button> */}

              {/* Navigation Button */}
              <Link
                href={`/collections/${prod.href}`}
                className="w-full bg-black text-[#CE790A] border-2 border-[#CE790A] px-4 py-2 text-center"
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
