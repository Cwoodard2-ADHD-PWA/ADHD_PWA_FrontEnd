import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideFromLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0%" },
          100: { transform: "translateX(0px)", opacity: "100%" },
        },
      },
      animation: {
        "left-slide": "slideFromLeft 0.5s linear",
      },
    },
  },
  plugins: [],
};
