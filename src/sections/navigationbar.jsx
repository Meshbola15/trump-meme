import React, { useState } from "react";
import Section from "../components/section";
import Button from "../components/button";
import Logo from "../components/logo";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  {
    link: "home",
    title: "Home",
  },
  {
    link: "contract",
    title: "Contract Address",
  },
  {
    link: "buy",
    title: "How to buy",
  },
];

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close menu on click
  };

  return (
    <Section className="py-6">
      <div
        className={`bg-void rounded-[50px] transition-all duration-500 ease-in-out ${
          isMenuOpen ? "py-6" : "py-4"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center px-8 flex-row">
          <Logo />

          <ul className="flex items-center gap-8 ml-auto">
            {links.map((link) => (
              <li key={link.title}>
                <button
                  onClick={() => handleScroll(link.link)}
                  className="text-white font-normal text-[12px] md:text-[14px] lg:text-[16px] focus:outline-none"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>

          <Button className="rounded-full ml-8">
            <p>Claim Now</p>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-between px-8 md:hidden">
          <Logo />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="text-white text-2xl"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 px-8 mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-start gap-5">
            {links.map((link) => (
              <li key={link.title}>
                <button
                  onClick={() => handleScroll(link.link)}
                  className="text-white font-normal text-[14px] focus:outline-none"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-start mt-4">
            <Button className="rounded-full">
              <p>Claim Now</p>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Navigationbar;