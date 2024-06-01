import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["w-1/6", "w-2/6", "w-3/6", "w-4/6", "w-5/6", "w-6/6"],
  theme: {
    extend: {
      colors: {
        background: "#222831",
        primary: "#00ADB5",
        secondary: "#ABB2BF",
        foreground: "#EEEEEE",
      },
      fontFamily: {
        firacode: ["Fira Code", "monospace"],
      },
      width: {
        "6/8": "75%",
        "1/8": "12.5%",
      },
      spacing: {
        "1/8": "12.5%",
      },
      borderWidth: {
        0.5: "0.5px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
