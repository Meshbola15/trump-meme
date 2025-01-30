import React from "react";
import Section from "../components/section";
import { images } from "../utils/images";
import ContractAddress from "../components/contractAddress";
import Disclaimer from "../components/disclaimer";

const Address = () => {
  return (
    <div
    id="contract"
      className="py-32"
      style={{
        backgroundImage: `radial-gradient(circle, #131385 43%, #000), url(${images.Grain})`,
      }}
    >
      <Section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-normal tracking-normal">
          Solana Contract Address
        </h1>
        <ContractAddress />
        <Disclaimer />
      </Section>
    </div>
  );
};

export default Address;
