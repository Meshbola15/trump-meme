import React from "react";
import { images } from "../../utils/images";

const CommunityCallToAction = () => {
  return (
    <div
      className="py-32 bg-void border-b-[4px]  relative"
      style={{
        background: "radial-gradient(circle, #131385 43%, #000)",
      }}
    >
      
      {/* Container for images */}
      <div
        className="relative mx-auto h-[800px] md:h-[600px] lg:h-[800px] flex justify-center items-center overflow-hidden"
        style={{
          background: `url(${images.community})`,
          backgroundPosition: "0 0",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 29%, transparent 49%)",
          }}
        ></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={images.community}
            alt="Background Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Layer (Radial Gradient Overlay) */}
        <div className="absolute inset-0 bg-gradient-radial from-black via-black/50 to-transparent" />

        {/* Foreground Image */}
        <div className="relative z-20 w-[90%] max-w-[800px]">
          <img
            src={images.communityTop}
            alt="Donald Trump Community"
            className="w-full h-auto"
            loading="eager"
            sizes="(max-width: 767px) 80vw, (max-width: 991px) 70vw, 800px"
            srcSet={`${images.communityTop} 500w, ${images.communityTop} 800w, ${images.communityTop} 995w`}
          />
        </div>
      </div>

      {/* Call to Action Text */}
      <div className="mt-12 text-center text-white">
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
          JOIN TRUMP'S SPECIAL COMMUNITY
        </h2>
        <div className="text-5xl md:text-6xl lg:text-7xl font-black text-lips my-4">
          $TRUMP
        </div>
        <div className="text-4xl md:text-5xl lg:text-6xl font-black">
          OWN A PIECE OF HISTORY
        </div>
      </div>
    </div>
  );
};

export default CommunityCallToAction;
