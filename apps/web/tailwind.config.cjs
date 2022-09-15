const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
