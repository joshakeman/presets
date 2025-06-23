import React from "react";
import Collection from "../../../../components/collection/index.js";
import { useCart } from "../../../../hooks/useCart.js";
import { products } from "../../../../lib/products.js";
import Layout from "../../../../components/layout/index.js";
import lit1Icon from "../../../../public/images/literarycollection-i-button.png";
import starsea from "../../../../public/images/starsea.png";
import BlurredImage from "../../../../components/blurred-image/index.js";
import Head from "next/head";

export default function index() {
  const { addToCart } = useCart();

  return (
    <>
      <Head>
        <title>
          Literary Collection 1 | 20 Photo Presets from Austen, Fitzgerald,
          Dickens and Poe
        </title>
        <meta
          name="description"
          content="Browse vintage-inspired photo presets featuring classic literature themes inspired by Jane Austen, F. Scott Fitzgerald, Charles Dickens and Edgar Allen Poe."
        />
      </Head>
      <Layout
        backgroundColor={"bg-backgroundBlueFaded"}
        backgroundImage={"bg-victorianPattern"}
      >
        {/* <h1 className="french-news text-center text-3xl mt-8 mb-4">
        Literary C
        ollection I ~ 20 Presets
      </h1> */}
        <div className="flex justify-center items-center flex-row h-auto">
          <BlurredImage
            src={starsea}
            alt=""
            role="presentation"
            className="rounded-lg"
            priority
            parentWidth="auto"
            // placeholder="blur"
            // placeholderUrl={lit1Icon.src}
          />
          <BlurredImage
            src={lit1Icon}
            alt=""
            role="presentation"
            className="rounded-lg"
            priority
            parentWidth="auto"
            // placeholder="blur"
            // placeholderUrl={literaryCollection1Icon}
          />
          <BlurredImage
            src={starsea}
            alt=""
            role="presentation"
            className="rounded-lg"
            priority
            parentWidth="auto"
            // placeholder="blur"
            // placeholderUrl={lit1Icon.src}
          />
        </div>
        <button
          className="menu-btn-lg-gold bourbonbase text-base md:text-2xl lg:text-3xl w-auto whitespace-nowrap min-w-[120px] block mx-auto letterpress-button pt-2 pb-2 pl-4 pr-4"
          onClick={() =>
            addToCart({
              name: "Literary Collection",
              price: 55.0,
              quantity: 1,
            })
          }
          aria-label="Add Literary Collection to cart"
        >
          <span className="whitespace-nowrap">Add to cart - </span>
          <span className="whitespace-nowrap">
            <span className="french-news text-base">$</span>
            <span className="bourbonbase"> 12</span>
          </span>
        </button>
        <h2 className="french-news text-center text-2xl mt-4 mb-8">
          <span className="whitespace-nowrap"> Jane Austen</span> |
          <span className="whitespace-nowrap"> Charles Dickens</span> |
          <span className="whitespace-nowrap"> F. Scott Fitzgerald</span> |
          <span className="whitespace-nowrap"> Edgar Allan Poe</span>
        </h2>
        {products["literary-1"].sets.map((set) => (
          <Collection
            title={set.title}
            titleCard={set.titleCard}
            assets={set.presets}
            key={set.title}
          />
        ))}
        {/* <Collection title="Jane Austen" assets={austen} />
        <Collection title="Charles Dickens" assets={dickens} />
        <Collection title="F. Scott Fitzgerald" assets={fitzgerald} />
        <Collection title="Edgar Allan Poe" assets={poe} /> */}
      </Layout>
    </>
  );
}
