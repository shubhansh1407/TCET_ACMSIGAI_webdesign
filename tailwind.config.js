/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        retroYellow: "#FCD34D",
        retroPink: "#FF70A6",
        retroBlue: "#70D6FF",
        retroGreen: "#38B000",
        retroBg: "#FAF7F2",
      },
      borderWidth: {
        3: "3px", // Signature Neo-Brutalist border width
      },
      boxShadow: {
        "brutal-sm": "2px 2px 0px 0px #000000",
        brutal: "4px 4px 0px 0px #000000",
        "brutal-lg": "7px 7px 0px 0px #000000",
      },
    },
  },
  plugins: [],
};
