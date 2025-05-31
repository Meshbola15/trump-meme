import React from "react";
import Section from "../../components/section";
import { images } from "../../utils/images";

const Info = () => {
  return (
    <section className="bg-void py-32">
      <Section
        className="border border-white rounded-[25px] lg:rounded-[50px] p-6 lg:p-12 grid grid-cols-1 md:grid-cols-2 bg-[#101058] gap-6"
        style={{
          backgroundImage: `url(${images.Grain}), radial-gradient(circle at 100%, #000030f7 25%, #fff0), url(${images.trump})`,
          backgroundPosition: "0 0, 0 0, 0 0",
          backgroundSize: "300px, auto, 150px",
          backgroundRepeat: "repeat",
        }}
      >
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[3.5rem] mb-6">
            TRUMP: THE CRYPTO PRESIDENT <br />
            <span className="rainbow-text">
              A Community Celebrating Courage & Strength
            </span>
          </h2>
          <img
            src={images.TrumpCard}
            alt=""
            className="w-full h-auto max-w-[500px]"
          />
        </div>
        <div className="relative">
          <div className="sticky top-2">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              $TRUMP are now freely tradeable on the blockchain.
            </h3>

            <p className="text-lg md:text-3xl lg:text-2xl mt-6 leading-7 md:leading-8 lg:leading-9">
              On July 13, 2024, President Trump faced death and came up
              fighting! With his fist in the air and the iconic battle cry FIGHT
              FIGHT FIGHT, President Trump showed the world what a LEADER is
              made of. His strength and courage ignited a movement becoming the
              most memorable meme of the century. <br /> <br /> Now, you can get
              your piece of history. This Trump Meme celebrates a leader who
              doesn’t back down, no matter the odds. Join the Trump Community -
              we’re all about fighting for what matters.
            </p>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default Info;
