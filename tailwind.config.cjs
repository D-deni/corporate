/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
     extend: {
      maxWidth: {
        container: '1280px'
      },
      colors: {
        opacityBtn: 'rgba(255,255,255,0.3)',
        opacityBg: 'rgba(0,0,0,0.9)'
      }
     },
  },
  plugins: [],
};
