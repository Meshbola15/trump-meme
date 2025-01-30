import React, { useEffect, useState } from "react";
import Button from "./button";

const ContractAddress = () => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCopied]);


  return (
    <div className="flex items-center justify-center w-fit bg-white space-x-2 md:space-x-5 p-2 md:p-4 rounded-xl mx-auto mt-2 max-w-full">
      <div className="w-fit h-fit p-2 text-white bg-black rounded-sm">
        <p>CA</p>
      </div>
      <p className="text-black truncate">
        6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN
      </p>
      <Button
        className="rounded-xl"
        onClick={() => {
          navigator.clipboard.writeText(
            "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN"
          );
          setIsCopied(true);
        }}
      >
        <p className="text-[12px]">{isCopied ? "Copied!" : "Copy Address"}</p>
      </Button>
    </div>
  );
};

export default ContractAddress;
