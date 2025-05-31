import React from "react";
import Section from "../../components/section";
import { icons } from "../../utils/icons";
import Button from "../../components/button";
import { images } from "../../utils/images";
import Disclaimer from "../../components/disclaimer";

const BuySection = () => {
  return (
    <div className="py-32 bg-void border-b-[4px] border-lips" id="buy">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-normal leading-normal">
          Buy Now with a Debit Card or Crypto!
        </h1>

        <section className="flex items-center justify-center gap-4 mt-4 flex-wrap">
          <IconContainer>
            <img src={icons.applePay} color="#fff" />
          </IconContainer>
          <IconContainer>
            <div className="flex flex-col space-y-1 items-center justify-center">
              <img src={icons.mastercard} />
              <img src={icons.visa} />
            </div>
          </IconContainer>
          <IconContainer>
            <img src={icons.venmo} />
          </IconContainer>
          <IconContainer>
            <img src={icons.usdc} />
          </IconContainer>
          <IconContainer>
            <img src={icons.applePay} />
          </IconContainer>
        </section>

        <Button className="rounded-md max-w-[20rem] w-full mt-6">
          <p className="font-bold text-[32px]">CLAIM NOW</p>
        </Button>
        <div className="flex items-center justify-center space-x-2 mt-4 mb-6">
          <p>Buy easy with </p>
          <img
            src={images.moonshot}
            loading="lazy"
            sizes="(max-width: 767px) 125px, (max-width: 991px) 150px, 124px"
            srcSet={`
                        ${images.moonshot500} 500w,
                        ${images.moonshot800} 800w,
                        ${images.moonshot1080} 1080w,
                        ${images.moonshot} 1500w
                      `}
            alt="Moonshot logo"
            className="image-77 "
          />
        </div>

        <Disclaimer />
      </Section>
    </div>
  );
};
export default BuySection;

const IconContainer = ({ children }) => (
  <div className="size-[100px] flex items-center flex-col justify-center p-4 border rounded-[6px]">
    {children}
  </div>
);
