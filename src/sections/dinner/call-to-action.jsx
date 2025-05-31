import React from "react";
import Disclaimer from "../../components/disclaimer";
import Button from "../../components/button";
import Section from "../../components/section";
import { images } from "../../utils/images";
import RegisterButton from "./register-button";

const CallToAction = () => {
  return (
    <div
      style={{
        backgroundPosition: "0 0, 50%, 0 0",
        backgroundRepeat: "repeat, repeat, repeat",
        backgroundSize: "auto, 300px, auto",
        backgroundImage: `linear-gradient(#04042073, #04042073), url(${images.Grain}), url(${images.stars})`,
      }}
      className="bg-[#04042073] w-full h-full flex flex-col justify-center items-center relative py-6 md:py-12"
    >
      <Section>
        <h1 className="text-[2rem] md:text-[4rem] lg:text-[5rem] leading-[70px] text-center drop-shadow-sm r text-shadow-lg text-shadow-black">
          Get $TRUMP. Have Dinner with President TRUMP!
        </h1>
        <h3 className="text-xl lg:text-3xl md:text-2xl text-center mt-8">
          <strong>Thursday, May 22, 2025 </strong> at TRUMP'S Private Club. Hear
          close-up, from President Trump, about the future of Crypto!
        </h3>
        <div className="my-8 flex justify-center items-center">
          <RegisterButton />
        </div>
        <Disclaimer />
      </Section>
    </div>
  );
};

export default CallToAction;
