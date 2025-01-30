import React from "react";
import { cn } from "../utils/utils";

const Button = ({ className, onClick, children }) => {
  return (
    <button
      className={cn(
        "px-7 py-3 bg-red-700 rounded-lg hover:bg-red-800 text-white cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
