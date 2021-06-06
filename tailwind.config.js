// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-N': '#000000',
        'main-A': '#fca311',
        'secondary-M': '#14213d',
        'secondary-G': '#e5e5e5',
        'terciary-W': '#ffffff',
      }
    },
  },
  variants: {},
  plugins: [],
}