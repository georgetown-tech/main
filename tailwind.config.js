const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'primary': "#FC3858",
      'active': "#FC3858",
      'secondary': "#191830",
    },
    extend: {},
  },
  plugins: [],
}
