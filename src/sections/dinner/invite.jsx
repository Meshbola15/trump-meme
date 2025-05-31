import React from "react";
import Section from "../../components/section";
import { images } from "../../utils/images";
import Starburst from "../../components/starburst";

const Invite = () => {
  return (
    <Section>
      <div className="px-0 md:px-12">
        <h5 className="text-black md:text-4xl text-3xl lg:text-5xl font-semibold mb-4 tracking-wide">
          Join President Donald J. Trump at his Private, Members-Only Club in
          Washington, D.C. for Dinner!
        </h5>

        <h6 className="text-black md:text-4xl text-3xl lg:text-5xl mt-6 font-semibold mb-4 tracking-wide">
          <span className="underline decoration-red-500 underline-offset-5">
            220 Special $TRUMP Meme Coin Holders{" "}
          </span>
          will be Invited to an unforgettable Gala DINNER with the President on
          May 22, 2025. {"  "}
          <span className="italic text-3xl font-light">
            (Black Tie Optional)
          </span>
        </h6>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 ">
        {/* <div className="relative overflow-visible">
          <img
            src={images.TNGCFront}
            alt="TNGC Front"
            className="w-full min-h-[200px] md:h-auto rounded-[40px] "
          />

          <div className="absolute -top-1/2 -left-0 transform flex items-center justify-center w-fit h-full size-[200px] p-6">
            <img
              src={images.starBust}
              alt="TNGC Back"
              className="size-[200px] md:h-auto absolute inset-0"
            />
            <article className="text-center text-white z-[3]">
              <p>
                Only <strong> 220 TOP $TRUMP HOLDERS </strong> will be invited!
              </p>
            </article>
          </div> */}
        {/* </div> */}

        <div className="relative w-full overflow-visible">
          {/* Background Image */}
          <img
            src={images.TNGCFront}
            alt="TNGC Front"
            className="w-full min-h-[200px] md:h-full rounded-[40px]"
          />

          {/* Starburst Badge */}
          <Starburst />
        </div>

        <div className="relative overflow-hidden">
          <img
            src={images.meeting}
            alt="TNGC Back"
            className="w-full min-h-[200px] md:h-full rounded-[40px]"
          />

          <div className="absolute bottom-0 inset-x-0 bg-black/55 p-6 rounded-b-[40px] text-white">
            <h2 className="text-center font-semibold">
              Will YOU be Having Dinner with PRESIDENT TRUMP?
            </h2>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Invite;
