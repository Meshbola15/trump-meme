import React from "react";
import Section from "../../components/section";
import { images } from "../../utils/images";

const Community = () => {
  return (
    <Section className="py-32 text-black grid grid-cols-1 md:grid-cols-2 place-content-center  place-items-center gap-12">
      <div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-lips leading-relaxed mb-4">
          Join the Trump Meme Community!
        </h2>
        <div className="bg-[#070734] p-6 rounded-md text-white">
          <h4 className="text-grain body font-semibold">Mission</h4>
          <p className="body">
            This is YOUR chance to join a community that’s all about fighting
            for what matters. The TRUMP Meme encourages a culture of success &
            optimism to make the world a better place. Go TRUMP! 👊
          </p>
        </div>
      </div>

      <div>
        <img src={images.TFight} alt="" />
      </div>
    </Section>
  );
};

export default Community;
