/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#070734",
        lips: "#c41220",
        savor: "#cececee0",
        duckling: "#FDEA71",
        grain: "#C89338",
        gold: "#d3b136",
      },
      fontFamily: {
        "neue-haas-grotesk-display-black": [
          "Neue Haas Grotesk Display Black",
          "sans-serif",
        ],
      },
      animation: {
        ticker: "ticker 7s linear infinite",
       wiggle: "wiggle 0.2s ease-in-out 4"
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
