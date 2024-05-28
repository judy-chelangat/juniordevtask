/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: ["56px", "40px"],
        h2: ["48px", "48px"],
        h3: ["40px", "40px"],
        h4: ["32px", "32px"],
        h5: ["24px", "24px"],
        h6: ["18px", "18px"],
        h7: ["16px", "24px"],
        h8: ["14px", "14px"],
        b1: ["16px", "12px"],
        b2: ["14px", "10px"],
        pgh1: ["16px", "28px"],
        pgh2: ["14px", "10px"],
      },
      colors: {
        p1: "#E6F6FF",
        p2: "#BDE4FF",
        p3: "#94D1FF",
        p4: "#6BBAFF",
        p5: "#42A1FF",
        p6: "#3183FF",
        p7: "#0B64D9",
        p8: "#2769CC",
        p9: "#00338C",
        p10: "#002266",
        s6: "#F86F03",
        s8: "#0F44CC",
        s10: "#00291B",
        g7: "#767C8C",
        g3:'#F7F8F3'
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
