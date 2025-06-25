/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nico: ['"Nico Moji"', "sans-serif"],
        aldrich: ["Aldrich", "sans-serif"],
      },
    },
  },
  plugins: [],
};
