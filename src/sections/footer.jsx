import React from "react";
import Section from "../components/section";
import Logo from "../components/logo";
import { icons } from "../utils/icons";
import Disclaimer from "../components/disclaimer";

const Footer = () => {
  const links = [
    {
      title: "Home",
      link: "home",
    },
    {
      title: "About",
      link: "about",
    },
    {
      title: "How to buy",
      link: "buy",
    },
    {
      title: "Contact us",
      link: "contact",
    },
  ];
  return (
    <footer className="bg-void pt-32">
      <Section className="text-center mx-auto">
        <Logo className="text-xl md:text-2xl lg:text-3xl mb-5" />
        <a href="https://x.com/GetTrumpMemes" target="_blank" className="mt-8">
          <img src={icons.twitter} alt="twitter x" className="mx-auto" />
        </a>

        <div className="flex items-center justify-center space-x-3 my-6">
          {links.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="text-[12px] md:text-[14px] lg:text-[16px] text-white"
            >
              {item.title}
            </a>
          ))}
        </div>

        <Disclaimer />

        <p className="text-[12px]  lg:text-[14px] font-bold text-savor my-12">
          Fight Fight Fight LLC will never call, text, email or otherwise
          contact you to request your personal information. Please be careful.
        </p>

        <hr className="border-savor w-full" />

        <div className="flex items-center justify-between py-8 text-[12px] flex-col md:flex-row gap-4">
          <p>© 2025 Fight Fight Fight LLC. All rights reserved.</p>

          <div className="flex items-center justify-center md:justify-end space-x-4 text-[12px] w-full md:w-fit">
            <a href="" target="_blank" className="underline">
              Privacy Policy
            </a>
            <a href="" target="_blank" className="underline">
              Terms & conditions
            </a>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
