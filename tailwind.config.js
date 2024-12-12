import withMT from "@material-tailwind/react/utils/withMT";
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
      //HELLO MINA WHERE ARE YOU AND WHAT DO YOU DO AND HOW CAN I HELP YOU NPM RUN DEV NPM HELP ME TO FIND MY SELF WHAT IS LAUGH
      //

      fontFamily: {
        acumin: ['"Acumin Variable Concept"', "sans-serif"],
        berlin: ['"Berlin Sans FB"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
});
