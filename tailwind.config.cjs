/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        news: {
          softOrange: "hsl(35, 77%, 62%)",
          softRef: "hsl(5, 85%, 63%)",
          offWhite: "hsl(36, 100%, 99%)",
          grayishBlue: "hsl(233, 8%, 79%)",
          darkGrayishBlue: "hsl(236, 13%, 42%)",
          veryDarkBlue: "hsl(240, 100%, 5%)",
        },
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
