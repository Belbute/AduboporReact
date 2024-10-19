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
          1: "#CBB08F",
          2: "#B8CACA",
          3: "#754F30",
          4: "#4E3B31",
          5: "#4B7F6E",
          6: "#A05A2E",
        },
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
