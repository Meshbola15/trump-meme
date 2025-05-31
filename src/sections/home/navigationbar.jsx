import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Section from "../../components/section";
import Button from "../../components/button";
import Logo from "../../components/logo";

const links = [
  { link: "home", title: "Home" },
  { link: "contract", title: "Contract Address" },
  { link: "buy", title: "How to Buy" },
  { link: "/dinner", title: "Dinner", type: "link" },
];

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (link) => {
    if (link.type === "link") {
      navigate(link.link);
    } else {
      const section = document.getElementById(link.link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <Section className="py-6">
      <div
        className={`bg-void rounded-[50px] transition-all duration-500 ease-in-out ${
          isMenuOpen ? "py-6" : "py-4"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center px-8">
          <Logo />

          <ul className="flex items-center gap-8 ml-auto">
            {links.map((link) => (
              <li key={link.title}>
                <button
                  onClick={() => handleClick(link)}
                  className="text-white font-normal text-sm lg:text-base hover:opacity-80 transition-opacity"
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
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="text-white text-2xl"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 px-8 mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-start gap-5">
            {links.map((link) => (
              <li key={link.title}>
                <button
                  onClick={() => handleClick(link)}
                  className="text-white font-normal text-base hover:opacity-80 transition-opacity"
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
