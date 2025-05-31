import React, { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check the scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-lips text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <HiArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;