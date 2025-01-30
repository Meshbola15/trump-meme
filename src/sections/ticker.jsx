import React from "react";
import { images } from "../utils/images";

const Ticker = () => {
  return (
    <div className="overflow-hidden w-full bg-[#040420] relative py-12 border-y-[4px] border-lips mt-24">
      <div className="flex animate-ticker items-center gap-32">
        {[...Array(8)].map((_, idx) => (
          <React.Fragment key={idx}>
            <div className="flex-shrink-0 flex items-center gap-6 px-8">
              <img
                src={images.TCard}
                alt="fightcard"
                className="w-[60px] md:w-[100px] lg:w-[160px]"
              />
              <p className="grade text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold ">
                $TRUMP
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-6 px-8">
              <img
                src={images.TCard}
                alt="fightcard"
                className="w-[60px] md:w-[100px] lg:w-[160px]"
              />
              <p className="grade text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold  ">
                FIGHT FIGHT FIGHT
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-6 px-8">
              <img
                src={images.TCard}
                alt="fightcard"
                className="w-[60px] md:w-[100px] lg:w-[160px]"
              />
              <p className="grade text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold  ">
                JOIN THE COMMUNITY
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
