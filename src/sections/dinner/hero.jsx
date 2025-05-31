import React, { useEffect, useState } from "react";
import Section from "../../components/section";
import { images } from "../../utils/images";
import Button from "../../components/button";
import Disclaimer from "./disclaimer";
import RegisterButton from "./register-button";

const Hero = () => {
  return (
    <Section>
      <div
        className="w-full bg-void p-6 md:p-12 rounded-[40px] overflow-hidden"
        id="home"
      >
        <div className="relative">
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 place-content-between p-4">
            <div className="flex flex-col items-start justify-between space-y-5">
              <h1 className="text-[4.5rem] md:text-[5rem] lg:text-[6rem] font-[900] font-neue-haas-grotesk-display-black tracking-tighter leading-[70px] lg:leading-[90px] uppercase text-white">
                Have <br /> Dinner <br /> WITH <br />
                <span className="text-lips">
                  {" "}
                  President <br /> TRUMP
                </span>
              </h1>
              <h5 className="text-2xl font-thin leading-8 tracking-normal">
                The most{" "}
                <span className="font-bold text-3xl">EXCLUSIVE INVITATION</span>{" "}
                in the World. Only for the TOP 220 $ TRUMP Meme Coin Holders.
              </h5>

              <h6 className="font-extrabold text-lg lg:text-xl">
                President Donald J. Trump is Known as the “Crypto President!” At
                this Intimate Private Dinner, Hear First-Hand President Trump
                Talk about the Future of Crypto.
              </h6>
            </div>

            <div className="self-center place-self-center md:place-content-end md:place-items-end md:self-end">
              <img
                src={images.trumpDinner}
                alt="T-fight Donald Trump"
                className="max-h-[70vh] w-auto ml-auto rounded-[30px] lg:rounded-none"
              />
              <div className="py-3 px-5 bg-[#030319] rounded-[10px]  w-full text-center">
                <h5 className="italic text-[#cececef5] font-light text-2xl">
                  Have Dinner In Washington, D.C. <br /> With President Trump!
                </h5>
              </div>
            </div>
          </section>

          {/* Button Section */}
          <section className="w-full mt-12 mb-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 grid-flow-row">
              <RegisterButton />
              {/* <Button className="rounded-md max-w-[35rem] w-full">
                <a
                  href="https://moonshot.money/TRUMP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl lg:text-2xl text-white no-underline font-bold uppercase"
                >
                 Claim $TRUMP with <br /> Crypto
                </a>
              </Button> */}
            </div>
          </section>

          {/* Contract Section */}

          <Disclaimer />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
