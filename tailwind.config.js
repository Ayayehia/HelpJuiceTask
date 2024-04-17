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
        5px  5px 6px rgba(34, 197, 94, 0.5), /* green */
        10px 10px 6px rgba(37, 99, 235, 0.5), /* blue */
        15px 15px 6px rgba(124, 58, 237, 0.5), /* purple */
        18px 18px 6px rgba(219, 39, 119, 0.5), /* pink */
        20px 20px 6px rgba(253, 224, 71, 0.5) /* yellow */
      `,
      },
    },
  },
  plugins: [],
};
