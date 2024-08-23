const { transform } = require("sucrase");

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
        quaternary: "#f2f0eb",
      },
      backgroundImage: {
        bgRewards: "url('../img/mobileReward.webp')",
        bgRewardsDT: "url('../img/xl-hero-desktop_2021.png')",
        bgAccountDT: "url('../img/rewardsaccount_bg.webp')",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-border-image")],
};
