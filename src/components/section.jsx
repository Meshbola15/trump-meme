import React from "react";
import { cn } from "../utils/utils";

const Section = ({ children, style, className }) => {
  return (
    <section
      className={cn(
        "w-full px-[5%] md:px-[8%] lg:px-[12%] mx-auto py-20",
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;
