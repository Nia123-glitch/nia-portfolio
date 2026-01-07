/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E8B4BC',
        'primary-light': '#F8D8DF',
        'primary-dark': '#D9A5B3',
      },
      fontFamily: {
        heading: ['Figtree', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
