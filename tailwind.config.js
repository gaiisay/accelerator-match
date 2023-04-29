/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logo: "#07A9B6",
        darkMode: "rgb(229 231 235)",
        lightMode: "rgb(31 41 55)",
        bgDarkMode: "#131314",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
