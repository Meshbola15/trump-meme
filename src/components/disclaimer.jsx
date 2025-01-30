import React from "react";
import { cn } from "../utils/utils";

const Disclaimer = ({className}) => {
  return (
    <div>
      <p className={cn(" text-savor text-sm tracking-normal leading-normal", className)}>
        Trump Memes are intended to function as an expression of support for,
        and engagement with, the ideals and beliefs embodied by the symbol
        "$TRUMP" and the associated artwork, and are not intended to be, or to
        be the subject of, an investment opportunity, investment contract, or
        security of any type. GetTrumpMemes.com is not political and has nothing
        to do with any political campaign or any political office or
        governmental agency. CIC Digital LLC, an affiliate of The Trump
        Organization, and Fight Fight Fight LLC collectively own 80% of the
        Trump Cards, subject to a 3-year unlocking schedule. CIC Digital LLC and
        Celebration Cards LLC, the owners of Fight Fight Fight LLC, will receive
        trading revenue derived from trading activities of Trump Meme Cards. See
        Terms & Conditions{" "}
        <a href="/token" target="_blank" className="text-grain">
          Here
        </a>
        , See Card Allocation{" "}
        <a href="/token" target="_blank" className="text-grain">
          Here
        </a>
      </p>
    </div>
  );
};

export default Disclaimer;
