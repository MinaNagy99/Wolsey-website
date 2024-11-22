const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBrown: "#864721",
        mainDark: "#383330",
        mainGold: "#c5a363",
        mainGray: "#F3F1EC",
        secondGray: "#EDEBE6",
      },

      fontFamily: {
        acumin: ['"Acumin Variable Concept"', "sans-serif"],
        berlin: ['"Berlin Sans FB"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
});
