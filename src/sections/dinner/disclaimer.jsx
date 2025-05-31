import React from "react";
import { cn } from "../../utils/utils";
const Disclaimer = ({ className }) => {
  return (
    <div>
      <p
        className={cn(
          " text-savor text-sm tracking-normal leading-normal",
          className
        )}
      >
        Trump Memes are intended to function as an expression of support for,
        and engagement with, the ideals and beliefs embodied by the symbol
        "$TRUMP" and the associated artwork, and are not intended to be, or to
        be the subject of, an investment opportunity, investment contract, or
        security of any type. GetTrumpMemes.com is not political and has nothing
        to do with any political campaign or any political office or
        governmental agency. See Terms & Conditions
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
