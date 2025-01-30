import React from "react";
import Section from "../components/section";
import { images } from "../utils/images";
import Disclaimer from "../components/disclaimer";

const Allocation = () => {
  return (
    <div
      className="border-y-[4px] border-lips"
      style={{
        backgroundImage: `url(${images.Grain}), url(${images.stars})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Section className="text-black py-32 text-center mx-auto">
        <h2 className="rainbow-text text-4xl md:text-5xl lg:text-6xl font-bold">Allocation</h2>
        <p className="body mt-6">
          There are 200 million $TRUMP available on day one and will grow to a
          total of 1 billion $TRUMP over three years. Each group's allocation
          is released on their own schedule over 3 years.
        </p>
        <img
          sizes="(max-width: 991px) 90vw, 700px"
          srcSet={`
            ${images.TMC500} 500w,
            ${images.TMC800} 800w,
            ${images.TMC1080} 1080w,
            ${images.TMC} 1500w
          `}
          alt="Allocation Chart"
          src={images.TMC}
          loading="eager"
          className="mx-auto my-12 "
        />
        <Disclaimer className="text-black" />
      </Section>
    </div>
  );
};

export default Allocation;