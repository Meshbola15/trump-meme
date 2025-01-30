import React, { useState } from "react";
import Section from "../components/section";
import { GoPlus } from "react-icons/go";

const Faqsection = () => {
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
              <p className="text-[14px] md:text-[16px] lg:text-[20px]">{item.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Faqsection;

const faq = [
  {
    title: "Is this an official Trump product?",
    ans: "Yes, this is the only Official Trump Meme, by President Donald J. Trump.",
  },
  {
    title:
      "What is the official contract address and symbol for the Trump Meme?",
    ans: `CA: 6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN

    Symbol: $TRUMP`,
  },
  {
    title: "How can I get Trump Memes?",
    ans: "Moonshot is the easiest way. Users sign up with an email address, can deposit with Apple Pay, debit card, credit card, Venmo, Solana/USDC, and receive your $TRUMP within minutes.",
  },
  {
    title: "What is a meme?",
    ans: "Merriam-Webster's meme noun: 1: an idea, behavior, style, or usage that spreads from person to person within a culture.",
  },
  {
    title: "Why do I need to perform KYC/AML when I buy on Moonshot?",
    ans: "Moonshot uses services like “MoonPay” that allow the customer to purchase Trump Memes with major USD payment methods or other digital assets, subject to sanctions checks, AML / CFT and anti-fraud controls. Once a customer “Buy Order” has been properly authorized, the purchasers will receive their Trump Memes in the wallet address nominated by the customer.",
  },
  {
    title: "Which blockchain network are the Trump Memes minted?",
    ans: "Solana",
  },
  {
    title: "What are the Trump Memes?",
    ans: "Trump Memes are fungible crypto assets created and tracked on the Solana blockchain.",
  },
  {
    title: "What else should I know?",
    ans: (
      <>
        Please find important disclosures about the Trump Meme{" "}
        <a href="/token" className="text-blue-600 underline">
          here
        </a>
        .
      </>
    ),
  },
];
