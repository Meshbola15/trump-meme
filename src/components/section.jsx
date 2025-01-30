import React from "react";
import { cn } from "../utils/utils";

const Section = ({ children, style, className }) => {
  return (
    <section className={cn("w-full max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] mx-auto", className)} style={style}>
      {children}
    </section>
  );
};

export default Section;
