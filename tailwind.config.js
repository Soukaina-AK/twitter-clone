/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'myGray':'#1a1a1a',
        'myBlack':'#101012',
        'lineColor':'#2c2c2e',
        'btnColor':'#222627',
        'hr1':'#222224',
        'pBtn':'#98979c',
        'postColor':'#110f10',
        'inputColor':'#161618',
        'inputBorder':'#303032',
      }
    },
  },
  plugins: [],
}