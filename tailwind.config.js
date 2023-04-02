const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--raleway-font)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: "#263254",
        red: "#E03333",
        cyan: "#6BD5E1",
        dark: "#131A2E",
        gray: "#AEAEAE",
        slate: "#707070",
        cyan: "#8798C5",
        lightBlue: "#6779AF",
      },
    },
  },
  plugins: [],
};
