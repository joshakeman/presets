import React from "react";
import Collection from "../../../../components/collection/index.js";
import {
  austen,
  dickens,
  fitzgerald,
  poe,
} from "../../../../components/import-images/index.js";
import Layout from "../../../../components/layout/index.js";

export default function index() {
  return (
    <Layout
      backgroundColor={"bg-backgroundBlueFaded"}
      backgroundImage={"bg-victorian-pattern"}
    >
      <h1 className="french-news text-center text-3xl mt-4 mb-4">
        Literary Collection I
      </h1>
      <h2 className="french-news text-center text-2xl mt-4 mb-4">
        <span className="whitespace-nowrap">Jane Austen</span>,
        <span className="whitespace-nowrap"> Charles Dickens</span>,
        <span className="whitespace-nowrap"> F. Scott Fitzgerald</span>,
        <span className="whitespace-nowrap"> Edgar Allan Poe</span>
      </h2>
      <button
        className="menu-btn-lg-gold bourbonbase text-base md:text-2xl lg:text-3xl w-auto whitespace-nowrap min-w-[120px] block mx-auto letterpress-button"
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
      <Collection title="Jane Austen" assets={austen} />
      <Collection title="Charles Dickens" assets={dickens} />
      <Collection title="F. Scott Fitzgerald" assets={fitzgerald} />
      <Collection title="Edgar Allan Poe" assets={poe} />
    </Layout>
  );
}
