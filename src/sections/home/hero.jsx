import React, { useEffect, useState } from "react";
import Section from "../../components/section";
import { images } from "../../utils/images";
import Button from "../../components/button";
import ContractAddress from "../../components/contractAddress";
import Disclaimer from "../../components/disclaimer";

const Hero = () => {
  return (
    <Section>
      <div
        className="w-full bg-void p-6 md:p-12 rounded-[40px] overflow-hidden"
        id="home"
      >
        {/* Fade effect wrapper */}
        <div className="relative">
          {/* Top fade */}
          {/* <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-void to-transparent pointer-events-none"></div> */}
          {/* Main content */}
          <section className="grid grid-cols-1 md:grid-cols-2 place-content-between">
            <div className="flex flex-col items-start justify-between space-y-5">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[60px] uppercase text-white">
                THE ONLY <span className="text-lips"> OFFICIAL </span> TrumP{" "}
                <br />
                MEME
              </h1>
              <h5 className="text-2xl md:text-3xl lg:text-4xl">
                Join the Trump Community. This is History in the Making!
              </h5>

              <h5>$TRUMP Airdrop is Live!</h5>
              <p>
                Join the Trump Community. This is your chance to claim your
                share of $TRUMP tokens
                <br />
                Claim Deadline: Feb 15,2025
              </p>
            </div>

            <div className="place-content-end place-items-end self-end">
              <img
                src={images.TFight}
                alt="T-fight Donald Trump"
                className="max-h-[70vh] w-auto ml-auto"
              />
              <div>
                <h5 className="italic text-[#cececee0] font-light">
                  "Celebrate Our Win & Have Fun!"
                </h5>
              </div>
            </div>
          </section>

          {/* Button Section */}
          <section className="w-full mt-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 grid-flow-row">
              <Button className="rounded-md max-w-[35rem] w-full">
                <a
                  href="https://moonshot.money/TRUMP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl lg:text-2xl text-white no-underline font-bold uppercase"
                >
                  Claim $TRUMP
                </a>
              </Button>
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
          <section className="my-8">
            <h6 className="font-bold text-center text-2xl">
              Solana Contract Address
            </h6>
            <ContractAddress />
          </section>

          <Disclaimer />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
