// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "12px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
        jakarta: ["Plus Jakarta Sans"],
        sora: ["Sora"],
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#186F65",
        secondary: "#3BA793",
        accent1: "#E6F5F2",
        accent2: "#C4E8D7",
        accent3: "#59C1D9",
        accent4: "#26828C",
        accent5: "#0E4459",
        accent6: "#6DB8D3",
        primaryDark: "#0f172a",
        secondaryGray: "#64748b",
        dark1: "#161e31",
        dark2: "#1d263a",
        dark3: "#1E293B",
        light1: "#f8fafc",
        light2: "#e2e8f0",
      },
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: (theme) => ({
        "gradient-light-1":
          "linear-gradient(to bottom, " +
          theme("colors.light2") +
          ", " +
          theme("colors.light1") +
          ")",
        "gradient-light-2":
          "linear-gradient(to bottom, " +
          theme("colors.light1") +
          ", " +
          theme("colors.light2") +
          ")",
        "gradient-dark-1":
          "linear-gradient(to bottom, " +
          theme("colors.dark1") +
          ", " +
          theme("colors.dark2") +
          ")",
        "gradient-dark-2":
          "linear-gradient(to bottom, " +
          theme("colors.dark2") +
          ", " +
          theme("colors.dark1") +
          ")",
      }),
    },
  },
  plugins: [],
};
