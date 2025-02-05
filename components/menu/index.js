import React from "react";
import CartButton from "../cart-button";
import Link from "next/link";
import Auth from "../auth";

export default function Menu() {
  return (
    <nav
      className="flex w-full justify-around"
      role="navigation"
      aria-label="Main menu"
    >
      <div id="button-group-left" className="flex justify-around w-1/3">
        <Link
          href="/"
          className="menu-btn bourbonbase menu-text text-2xl letterpress-button focus:ring-2 focus:ring-offset-2"
        >
          HOME
        </Link>
        <Link
          href="/account"
          className="menu-btn bourbonbase menu-text text-2xl letterpress-button focus:ring-2 focus:ring-offset-2"
        >
          ACCOUNT
        </Link>
      </div>
      <div id="button-group-right" className="flex justify-around w-1/3">
        <Auth />
        <Link
          href="/cart"
          className="menu-btn bourbonbase menu-text text-2xl letterpress-button focus:ring-2 focus:ring-offset-2"
        >
          CART
        </Link>
      </div>
    </nav>
  );
}
