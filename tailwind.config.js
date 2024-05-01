/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgb(19, 59, 45)',
        customBlue: 'rgb(0, 102, 204)',
      },
    },
  },
  variants: {},
  plugins: [],
}

