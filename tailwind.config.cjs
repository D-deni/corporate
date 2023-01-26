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
        opacityBg: 'rgba(0,0,0,0.8)',
        gradient: 'rgb(254,254,254)',
      },
      animation: {
        'spin': 'spin 3s linear infinite',
        'bounce': 'bounce 1s infinite',
      },
    
      screens: {
      }
     },
  },
  plugins: [],
};
