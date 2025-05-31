import React from "react";
import { images } from "../../utils/images";
import Section from "../../components/section";
import Button from "../../components/button";
import RegisterButton from "./register-button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Leaderboard = () => {
  return (
    <div className=" bg-cover bg-center w-full h-full flex flex-col justify-center items-center relative py-6 md:py-12">
      <img
        src={images.rainbow}
        alt="rainbow"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <Section className=" z-10 py-6 md:py-12  h-fit">
        <section className="grid place-items-center grid-cols-1 md:grid-cols-2 rounded-[40px] w-full">
          <section
            style={{
              backgroundImage: `linear-gradient(#ffffff9c, #ffffff9c), url(${images.stars})`,
              backgroundPosition: "0 0, 50% 100%",
              backgroundRepeat: "repeat, no-repeat",
              backgroundSize: "auto, auto",
              flexDirection: "column",
              justifyContent: "center",
              padding: "3rem",
              fontFamily: "neue-haas-grotesk-text, sans-serif",
              display: "flex",
            }}
            className="bg-white h-full rounded-t-[40px] md:rounded-l-[40px] md:rounded-tr-none p-6 md:p-12 flex flex-col justify-between relative"
          >
            <DotLottieReact
            className="absolute  w-full h-full"
              src="https://lottie.host/5e6f4244-3fec-4cc1-b4ab-08684f0b247b/z4PVegQ9vc.lottie"
              loop
              autoplay
            />
            <h3 className="rainbow-text text-5xl font-bold mb-4">
              The Top 220 $TRUMP Owners Will Be Joining President Trump for a
              Gala Dinner!
            </h3>
            <h6 className="text-xl md:text-2xl lg:text-3xl text-black mb-4 font-light">
              Our leaderboard updates hourly in real time. Your{" "}
              <strong
                style={{
                  fontWeight: "900",
                }}
              >
                $TRUMP
              </strong>{" "}
              coin count puts you in the running. The competition is fierce. Own{" "}
              <strong
                style={{
                  fontWeight: "900",
                }}
              >
                $TRUMP
              </strong>
              —or watch from the sidelines.
            </h6>
            <h6 className="text-2xl font-black tracking-tight text-black">
              You must register in order to participate.
            </h6>
          </section>
          <section className="w-full h-full rounded-b-[40px] md:rounded-l-[40px] md:rounded-bl-none">
            <img
              src={images.Leaderboard}
              alt="leaderboard"
              className="h-full object-cover w-auto rounded-b-[40px] md:rounded-r-[40px] md:rounded-bl-none"
            />
          </section>
        </section>
        <p className="text-center mt-6 md:text-right w-full">
          This is an example of a leaderboard and not the actual one.
        </p>
      </Section>

      <RegisterButton />
    </div>
  );
};

export default Leaderboard;
