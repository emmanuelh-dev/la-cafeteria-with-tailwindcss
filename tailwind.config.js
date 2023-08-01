/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors:{
        beigeLight: '#e9d9c0',
        beige: '#c39c63',
        brown: '#5e311e',
      }
    },
  },
  plugins: [],
}
