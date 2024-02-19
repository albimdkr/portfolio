/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        primary: "#186F65",
        secondary: "#3BA793",
        accent1: " #D9EFE0",
        accent2: "#C4E8D7",
        primaryDark: "#0f172a",
        secondaryGray: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
