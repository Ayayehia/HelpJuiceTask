/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        alph: ["alphabetized cassette tapes", "sans-serif"],
        plus: ["Plus Jakarta Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "semi-transparent-black": "rgba(0, 0, 0, 0.6)",
      },
      boxShadow: {
        custom: `
        5px  5px 6px #44FF9A, /* green */
        10px 10px 6px  #44B0FF, /* blue */
        15px 15px 6px #8B44FF, /* purple */
        18px 18px 6px #FF6644, /* pink */
        20px 20px 6px #EBFF70 /* yellow */
      `,
        "all-around-blur": "0 0 15px 10px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #F0FBB9, #FBB3A0, #BFA2FD, #A4D0FC, #9FE9E2, #9FFACE)",
        "new-custom-gradient":
          "linear-gradient(to right, #44FF9A, #44B0FF, #8B44FF, #FF6644, #EBFF70)",
      },
    },
  },
  plugins: [],
};
