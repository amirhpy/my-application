/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#00abf0',
      'blue-dark': '#081b29',
      'background': '#081b29',
      'white': '#ededed',
    },
    fontFamily: {
      'vazir': 'vazir',
      'gandom': 'gandom'
    },
    extend: {},
  },
  plugins: [],
}