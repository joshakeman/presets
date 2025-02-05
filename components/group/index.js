import React from "react";
import Image from "next/image";
import lit1 from "../../public/images/literarycollection-button.webp";

export default function Group() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image src={lit1} alt="" placeholder="blur" className="w-1/4" />
      <button className="menu-btn-lg-gold bourbonbase">Add to Cart</button>
    </div>
  );
}
