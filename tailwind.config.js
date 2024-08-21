/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        primary: "#1e3932",
        secondary: "#00754a",
        tertiary: "#d4e9e2",
      },
      backgroundImage: {
        bgRewards: "url('../img/mobileReward.webp')",
        bgRewardsDT: "url('../img/bg-rewardpc.webp')",
      }
    },
  },
  plugins: [],
};

