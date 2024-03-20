/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cinzel: ["Cinzel", "serif"],
      epilogue: ["Epilogue", "serif"],
    },
    extend: {
      animation: {
        openmenu: "openmenu 15s ease-in duration-300",
        closemenu: "closemenu 15s ease-out duration-300",
      },
    },
  },
  plugins: [],
};
