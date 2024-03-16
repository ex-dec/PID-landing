/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      "theme-heading": ["'Exo 2'", "sans-serif"],
      "theme-content": ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "theme-primary": "#075E96",
        "theme-secondary": "#2899D5",
        "theme-grayish-blue": "#9194A1",
        "theme-gray": "#DBDDDC",
        "theme-dark-blue": "rgb(37, 43, 70)",
        "theme-dark-blue-tp": "rgba(37, 43, 70, 0.9)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  plugins: [require("flowbite/plugin")],
};
