// tailwind.config.js
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
        // accent6: "#5CA9C4" valid,
        // accent6: "#4D99B6",
        // accent6: "#3A96B1",
        primaryDark: "#0f172a",
        secondaryGray: "#64748b",
        dark1: "#1d263a",
        dark2: "#161e31",
        light1: "#e2e8f0",
        light2: "#f8fafc",
      },
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: (theme) => ({
        "gradient-light-1":
          "linear-gradient(to bottom, " +
          theme("colors.light1") +
          ", " +
          theme("colors.light2") +
          ")",
        "gradient-light-2":
          "linear-gradient(to bottom, " +
          theme("colors.light2") +
          ", " +
          theme("colors.light1") +
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
