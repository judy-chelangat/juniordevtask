/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: ["56px", "40px"],
      },
      colors: {
        p1: "#E6F6FF",
        p2: "#BDE4FF",
      },
      fontFamily: {
        manrope: ["Manrope"],
        manrope2: ["Manrope:wght@800"],
      },
      width: {
        86: "86%",
        65: "65%",
      },
    },
  },
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
};
