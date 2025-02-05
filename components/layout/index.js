import React from "react";
import Menu from "../menu";

export default function Layout({ backgroundImage, backgroundColor, children }) {
  return (
    <div
      className={`${backgroundImage} ${backgroundColor} flex flex-col h-full min-h-screen pt-6 pl-12 pr-12 bg-repeat bg-blend-soft-light bg-auto`}
    >
      <Menu />
      {children}
    </div>
  );
}
