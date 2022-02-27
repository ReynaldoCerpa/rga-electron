const colors = require('tailwindcss/colors');
const color = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: color.trueGray,
        blue: "#08406e"
      },
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
    },
  },
  plugins: [],
};
