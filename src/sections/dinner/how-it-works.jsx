import React from "react";
import { images } from "../../utils/images";
import Section from "../../components/section";
import Starburst from "../../components/starburst";

const HowItWorks = () => {
  return (
    <div
      style={{
        backgroundPosition: "0 0, 50%, 0 0",
        backgroundRepeat: "repeat, repeat, no-repeat",
        backgroundSize: "auto, 300px, cover",
        backgroundImage: `linear-gradient(#040420cf, #040420cf), url(${images.Grain}), url(${images.stars})`,
        backgroundColor: "#040420",
        backgroundAttachment: "scroll, scroll, scroll",
      }}
    >
      <Section>
        <h1 className="rainbow-text text-5xl md:text-7xl text-center">
          How it Works
        </h1>

        <div className="w-full gap-8 mt-12 flex flex-col ">
          {works.map((work, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              }  col-span-2 relative`}
            >
              {index === works.length - 1 ? <Starburst direction="right" /> : null}
              <HowToCard
                title={work.title}
                description={work.description}
                number={index + 1}
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HowItWorks;

const HowToCard = ({ title, description, number }) => {
  return (
    <div className="flex items-start border border-[#9936d345] shadow-black drop-shadow-md bg-[#1e152b36] rounded-[20px] p-6 max-w-[700px]">
      <div className="p-6">
        <h4 className="text-gold text-xl md:text-2xl font-thin">STEP</h4>
        <h3 className="text-gold text-4xl md:text-5xl font-semibold">
          0{number}
        </h3>
      </div>
      <div>
        <h2 className="text-5xl font-bold uppercase">{title}</h2>
        <hr className="my-4" />
        {description}
      </div>
    </div>
  );
};

const works = [
  {
    title: "Register Your Wallet",
    description: (
      <p className="text-lg font-light">
        Connect your wallet and submit your{" "}
        <strong className="font-[900]">
          Full Legal Name, Email, Phone Number
        </strong>{" "}
        so we can contact you if you win.{" "}
        <span className="italic">(This will never be publicly shown)</span>
      </p>
    ),
  },
  {
    title: "Hold $TRUMP",
    description: (
      <p className="text-lg font-light">
        From <strong className="font-[900]">April 23 to May 12</strong>, hold as
        much $TRUMP as you can. Your{" "}
        <strong className="font-[900]">average holdings</strong> during this
        period will determine your ranking. The more $TRUMP you hold—and the
        longer you hold it—the higher your ranking will be.
      </p>
    ),
  },
  {
    title: "Be a Top 220 Holder",
    description: (
      <p className="text-xl md:text-2xl font-light">
        After the holding period ends, the{" "}
        <strong className="font-[900]">Top 220 holders</strong> with the highest
        average $TRUMP holdings will be selected. Watch your ranking on the
        leaderboard. Don’t miss out — have fun!
      </p>
    ),
  },
  {
    title: "Get INVITED",
    description: (
      <p className="text-lg font-light">
        If you are one of the Top 220 $TRUMP holders, you’ll receive an
        invitation with details to confirm your attendance at the Gala Dinner on
        May 22, 2025.
      </p>
    ),
  },
  {
    title: "Attend the Gala",
    description: (
      <p className="text-lg font-light">
        Join President Trump on May 22, 2025 at his private Trump National Golf
        Club in Washington, D.C. for a once-in-a-lifetime evening. Learn about
        the future of Crypto!
      </p>
    ),
  },
  {
    title: "BONUS! PRIVATE VIP RECEPTION",
    description: (
      <p className="text-lg font-light">
        The Top 25 holders will be invited for an ultra-exclusive private VIP
        Reception with the President. And separately by us to a Special Tour.
      </p>
    ),
  },
];
