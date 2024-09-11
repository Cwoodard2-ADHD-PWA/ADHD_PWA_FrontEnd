import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideFromBottom: {
          "0%": { transform: "translateY(-30px)" },
          100: { transform: "translateY(0px)" },
        },
      },
      animation: {
        "bottom-slide": "slideFromBottom 1s linear",
      },
    },
  },
  plugins: [],
};
