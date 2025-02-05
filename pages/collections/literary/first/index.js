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
      <Collection title="Jane Austen" assets={austen} />
      <Collection title="Charles Dickens" assets={dickens} />
      <Collection title="F. Scott Fitzgerald" assets={fitzgerald} />
      <Collection title="Edgar Allan Poe" assets={poe} />
    </Layout>
  );
}
