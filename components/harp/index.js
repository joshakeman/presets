import React from "react";
import Image from "next/image";
import harp from "../../public/images/harp.webp";

export default function Harp() {
  return (
    <div className="flex justify-center items-center">
      <Image className="grow" src={harp} alt="" />
    </div>
  );
}
