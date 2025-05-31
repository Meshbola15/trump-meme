import React from "react";
import Button from "../../components/button";

const RegisterButton = () => {
  return (
    <Button className="hover:bg-blue-600 rounded-none px-8 py-4 w-fit z-20 shadow-black shadow-2xl/10  ">
      <a
        href="https://moonshot.money/TRUMP"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl md:text-3xl lg:text-3xl text-white no-underline font-bold uppercase"
      >
        Register Now
      </a>
    </Button>
  );
};

export default RegisterButton;
