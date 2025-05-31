import React from "react";
import { images } from "../../utils/images";
import Section from "../../components/section";

const Bonus = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${images.TNGC})`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Section className="py-6 md:py-12">
        <h1 class="md:text-6xl text-4xl lg:text-7xl text-center mb-8">
          EXCLUSIVE BONUS!
        </h1>
        <div className="bg-[#f7f7f7e4] px-[2.1rem] py-[3rem] rounded-[40px] shadow-2xl shadow-black/90">
          <img
            src={images.trumpFavicon}
            alt="trump favicon"
            className="mx-auto max-w-[150px] mb-12"
          />
          <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] italic font-light text-black">
            <span className="text-red-600 font-[700] italic">
              FOR THE TOP 25 COIN HOLDERS,
            </span>{" "}
            YOU are Invited to an Exclusive Reception before Dinner with YOUR
            FAVORITE PRESIDENT! <br /> <br />
            PLUS, We have separately by us arranged for a Special VIP Tour for
            you - so make sure you stay in town.
          </h1>
          <p className="mt-[2rem] text-center text-black">
            This Tour is being arranged by Fight Fight Fight LLC. President
            Trump is appearing at the dinner as a guest and not soliciting any
            funds for it.
          </p>
        </div>

        <div className="bg-[#0606139e] px-[2.1rem] py-[3rem] rounded-[40px] shadow-xl shadow-white/70 text-white mt-12 text-center">
          <img
            src={images.TCard}
            alt="trump favicon"
            className="mx-auto max-w-[150px] mb-12"
          />
          <h1 className="text-header font-normal leading-[1.2]">
            The <strong>Top 25 $TRUMP Meme Coin Holders </strong> on the
            leaderboard will enjoy a <strong> Private VIP Reception</strong>{" "}
            with President TRUMP and Separately by us to a{" "}
            <strong> Special VIP TOUR.</strong>
          </h1>

          <h1 className="text-[1.9rem] md:text-[2rem] lg:text-[2.5rem] text-gold mt-[1.5rem] mb-[2rem] leading-[1.2] font-light">
            <span className="underline underline-offset-[5px] md:underline-offset-[10px]">
              {" "}
              Only the Top 25 $TRUMP Holders{" "}
            </span>{" "}
            will experience this. <br /> <br /> The Question is...
            <span className="text-red-600"> ARE YOU IN? </span>
          </h1>

          <h1 className="text-header  leading-10 md:text-[1.9rem] text-3xl lg:text-6xl font-thin">
            <strong>OWN $TRUMP </strong> and Climb the Leaderboard. <br />{" "}
            <br /> Have Dinner with President Trump and the $TRUMP Community!
          </h1>
          <h4 className="mt-[2rem] text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] font-thin">
            Let the President know how many $TRUMP coins YOU own!
          </h4>
          <p className="mt-[2rem] text-center font-light">
            This Tour is being arranged by Fight Fight Fight LLC. President
            Trump is appearing at the dinner as a guest and not soliciting any
            funds for it.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Bonus;
