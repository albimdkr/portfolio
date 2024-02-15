/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        primary: '#186F65',
        dark: '#of172a',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
};

