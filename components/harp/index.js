import React from "react";
import Image from "next/image";
import harp from "../../public/images/harp.png";
import BlurredImage from "../blurred-image";

export default function Harp() {
  return (
    <div className="flex justify-center items-center">
      {/* <Image className="grow" src={harp} alt="" role="presentation" priority /> */}
      <BlurredImage
        className="grow"
        src={harp}
        alt=""
        role="presentation"
        priority
      />
    </div>
  );
}
