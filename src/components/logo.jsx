import React from "react";
import { cn } from "../utils/utils";

const Logo = ({className}) => {
  return (
    <h1 className={cn("font-black text-2xl md:text-3xl lg:text-4xl text-white", className)}>
      <span className="grade ">TRUMP </span>
      MEME
    </h1>
  );
};

export default Logo;
