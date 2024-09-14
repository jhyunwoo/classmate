// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nanum: ["NanumSquareRound-R", "sans-serif"],
        NanumB: ["NanumSquareRound-B", "sans-serif"],
        NanumEB: ["NanumSquareRound-EB", "sans-serif"],
        NanumL: ["NanumSquareRound-L", "sans-serif"],
      },
    },
  },
  plugins: [],
};
