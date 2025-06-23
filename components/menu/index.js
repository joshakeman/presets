import React from "react";
import CartButton from "../cart-button";
import Link from "next/link";
import Auth from "../auth";
import { useCart, cartReady } from "../../context/CartContext";

export default function Menu() {
  const { cart } = useCart();
  cartReady = true;
  return (
    <nav
      className="flex w-full justify-around"
      role="navigation"
      aria-label="Main menu"
    >
      <div id="button-group-left" className="flex justify-around w-1/3">
        <Link
          href="/"
          className="bg-black border-2 border-[#CE790A] py-2 px-6 w-[30%] sm:w-[50%] md:w-[45%] lg:w-[40%] bourbonbase text-base md:text-xl lg:text-2xl text-[#CE790A] text-center letterpress-button focus:ring-2 focus:ring-offset-2 whitespace-nowrap"
        >
          HOME
        </Link>
        <Link
          href="/account"
          className="bg-black border-2 border-[#CE790A] py-2 px-6 w-[30%] sm:w-[50%] md:w-[45%] lg:w-[40%] bourbonbase text-base md:text-xl lg:text-2xl text-[#CE790A] text-center letterpress-button focus:ring-2 focus:ring-offset-2 whitespace-nowrap"
        >
          ACCOUNT
        </Link>
      </div>
      <div id="button-group-right" className="flex justify-around w-1/3">
        <Auth />
        <div className="relative inline-block bg-black border-2 border-[#CE790A] py-2 px-6 w-[30%] sm:w-[50%] md:w-[45%] lg:w-[40%] bourbonbase text-base md:text-xl lg:text-2xl text-[#CE790A] text-center letterpress-button focus:ring-2 focus:ring-offset-2 whitespace-nowrap">
          <Link href="/cart">
            CART{" "}
            {cartReady && cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#CE790A] text-black text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
