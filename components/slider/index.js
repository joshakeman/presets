import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import React from "react";
import Image from "next/image";

const CustomHandle = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "0.25rem",
        backgroundImage: "/images/vert-line.webp",
        boxShadow: `0 0 0 2px rgba(148,0,211,1),
      0 0 2px 4px rgba(75,0,130,1),
      0 0 0 6px rgba(0,0,255,1),
      0 0 0 8px rgba(0,255,0,1),
      0 0 0 10px rgba(255,255,0,1),
      0 0 0 12px rgba(255,127,0,1),
      0 0 0 14px rgba(255,0,0,1)`,
        cursor: "pointer",
      }}
    />
  );
};

export default function Example() {
  return (
    <ReactCompareSlider
      handle={<CustomHandle />}
      itemOne={
        <ReactCompareSliderImage
          src={dotheboy1.src}
          srcSet="..."
          alt="Image one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src={dotheboy2.src}
          srcSet="..."
          alt="Image one"
        />
      }
    />
  );
}
