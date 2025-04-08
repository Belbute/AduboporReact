/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      colors: {
        app: {
          1: "#EBECE0",
          main: "#122234",
          3: "#754F30",
          secondary: "#91B1C4",
          5: "#4B7F6E",
          6: "#A05A2E",
        },
        // New dedicated text colors
        textColors: {
          Dark: "#122234", // Dark gray for primary text
          secondary: "#666666", // Medium gray for secondary text
          light: "#EBEBEB", // White for text on dark backgrounds
        },
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
