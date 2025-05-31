import React from "react";
import Section from "../../components/section";
import { images } from "../../utils/images";
import Button from "../../components/button";
import RegisterButton from "./register-button";

const Hold = () => {
  return (
    <div>
      <Section className="py-32">
        <section className="grid grid-cols-1 md:grid-cols-2 place-content-between place-items-end">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-red-600">
              Hold Big. <br />
              Hold Strong. <br />
              Hold $TRUMP.
            </h1>

            <div className="mt-8 bg-gradient-to-b from-[#070636] to-[#090865] p-12 rounded-[40px]">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                Eligibility
              </h3>
              <ul className="list-disc space-y-4 text-xl">
                <li>
                  Be in the Top 220 average $TRUMP holders from April 23 – May
                  12, 2025
                </li>
                <li>You can not be from a KYC watchlist country</li>
                <li>You must pass a background check after selection</li>
                <li>
                  No guests allowed — only the registered person may attend
                </li>
                <li>Once attendee info is submitted, it cannot be changed</li>
              </ul>
            </div>
          </div>
          <img src={images.TFight} alt="" />
        </section>

        //und-image: linear-gradient(#b4b4b429, #7070701c), url(

        <section
          className="border border-black rounded-[40px] px-8 py-10 md:p-12 mt-12 text-center text-black bg-white"
          style={{
            backgroundPosition: "0 0, 50%, 0",
            backgroundRepeat: "repeat, repeat, no-repeat",
            backgroundSize: "auto, auto",
            backgroundImage: `linear-gradient(#b4b4b429, #7070701c), url(${images.Grain}), url(${images.stars})`,
            backgroundAttachment: "scroll, scroll, scroll",
          }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black py-12">
            <span className="text-red-600">$TRUMP </span> Power! <br />
            The Biggest and Most Important $TRUMP Holders will Proudly have a
            Gala Dinner with the President. Will You Be One of Them?
          </h1>
          <hr className="divide-dotted bg-black text-black border-black my-12" />

          <h2 className="text-black text-3xl md:text-4xl lg:text-4xl text-left font-extrabold">
            🔒 Stay Safe – Important Reminder for All $TRUMP Holders.
          </h2>
          <h6 className="my-6 text-black text-lg md:text-xl lg:text-2xl font-thin">
            Stay alert. Stay protected. <br /> We will{" "}
            <span className="font-[900]">
              never ask you to send your $TRUMP coins
            </span>
            —to anyone, for any reason. For Gala Dinner eligibility, we
            <span className="font-[900]">
              {" "}
              require only your wallet address{" "}
            </span>{" "}
            to verify holdings. Trust only our official $TRUMP channels and
            announcements.
          </h6>

          <RegisterButton />
        </section>
      </Section>
    </div>
  );
};

export default Hold;
