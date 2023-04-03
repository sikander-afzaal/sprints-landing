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
        activeClass: "#101A36",
      },
      boxShadow: {
        selectedTime: "0px 4px 10px 0px rgba(48,71,141,1) inset",
      },
    },
  },
  plugins: [],
};
