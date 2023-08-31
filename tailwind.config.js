/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom': '0 0 15px #424242',
      },
      fontFamily: {
        'body': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}