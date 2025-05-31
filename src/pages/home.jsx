import React from "react";
import Navigationbar from "../sections/home/navigationbar";
import Hero from "../sections/home/hero";
import Ticker from "../sections/home/ticker";
import Address from "../sections/home/address";
import BuySection from "../sections/home/buy";
import Info from "../sections/home/info";
import Allocation from "../sections/home/allocation";
import Community from "../sections/home/community";
import CommunityCallToAction from "../sections/home/communityCallToAction";
import Faqsection from "../components/faqsection";
import Footer from "../sections/footer";
import ScrollToTop from "../sections/home/scrollToTop";

const Home = () => {
  return (
    <div>
      <Navigationbar />
      <Hero />
      <Ticker />
      <Address />
      <BuySection />
      <Ticker />
      <Info />
      <Allocation />
      <Community />
      <CommunityCallToAction />
      <Faqsection faq={faq} />

      <ScrollToTop />
    </div>
  );
};

export default Home;

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
