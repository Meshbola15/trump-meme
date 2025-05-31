import React, { useState } from "react";
import Section from "./section";
import { GoPlus } from "react-icons/go";

const Faqsection = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <Section className="my-32">
      <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold  text-center text-white rainbow-text mb-24">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8">
        {faq.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="max-w-[80%]">
                <p className="text-black text-[1rem] md:text-[1.4rem] lg:text-[1.7rem]  font-[600]">
                  {item.title}
                </p>
              </div>
              <GoPlus
                className={`text-black transition-transform duration-200 text-[1rem] md:text-[1.4rem] lg:text-[1.7rem] ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                }`}
              />
            </div>
            <div
              className={`mt-2 text-sm text-gray-700 overflow-hidden transition-all duration-300 ease-linear ${
                activeIndex === index ? "h-fit" : "h-0"
              }`}
            >
              <p className="text-[18px] md:text-[20px] lg:text-[25px] text-black font-thin">
                {item.ans}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Faqsection;
