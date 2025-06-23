import * as React from "react";
import Image from "next/image";
import Planets from "../components/planets";
import Harp from "../components/harp";
import Layout from "../components/layout";
import curl from "../public/images/curl.png";
import Collections from "../components/collections-section";
import "react-before-after-slider-component/dist/build.css";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Photo Presets Store | Vintage-Inspired Collections</title>
        <meta
          name="description"
          content="Browse vintage-inspired photo presets featuring classic literature themes like Austen, Poe, and Dickens."
        />
      </Head>

      <Layout
        backgroundColor={"bg-backgroundBlueFaded"}
        backgroundImage={"bg-victorianPattern"}
      >
        <Planets />

        {/* Decorative images: aria-hidden="true" for screen readers */}
        <div className="flex justify-center items-center p-4">
          <Image
            src={curl}
            alt=""
            placeholder="blur"
            aria-hidden="true"
            priority
          />
          <div className="px-3.5">
            <h2 className="french-news text-center text-xl">
              Instantly Transform Your Photographs
            </h2>
            <p className="french-news text-center text-xl">
              with Machine-Age Wizardry! as if from Outer Space!
            </p>
          </div>
          <Image
            src={curl}
            alt=""
            placeholder="blur"
            aria-hidden="true"
            priority
          />
        </div>

        <Harp />

        {/* More descriptive heading */}
        <h2
          id="stunning-text"
          className="french-news text-2xl text-center menu-text mt-4 mb-8"
          aria-labelledby="stunning-text"
        >
          Examine our gallery of transformations below!
        </h2>

        <Collections />
      </Layout>
    </>
  );
};

export default IndexPage;
