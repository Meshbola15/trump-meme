import React from "react";
import { images } from "../utils/images";

const Starburst = ({ direction }) => {
  return (
    <div
      className={`absolute top-[-20px] ${
        direction === "right" ? "right-[-20px] lg:right-[-80px] rotate-[30deg]"  : "left-[-20px] lg:left-[-80px] -rotate-[30deg]"
      } lg:top-[-80px]  size-[120px] lg:size-[180px] z-10 flex items-center justify-center `}
    >
      {/* Starburst SVG or Image */}
      <img
        src={images.starBust} // Use red starburst PNG/SVG image with transparent center
        alt="Starburst"
        className="absolute w-full h-full"
      />

      {/* Text on Starburst */}
      <article className="relative text-center text-white px-4 text-[10px] lg:text-[14px] leading-tight font-bold">
        <p>Only</p>
        <p className="text-[16px]">220</p>
        <p>TOP $TRUMP</p>
        <p>HOLDERS</p>
        <p>will be invited!</p>
      </article>
    </div>
  );
};

export default Starburst;
