/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg-img': "url('./src/assets/homeBG.png')",
      },
      minHeight:{
        'screen-fit':'calc(100vh - 96px)'
      },
      backgroundColor:{
        'cream-bg': '#FFF7ED'
      },
      textColor:{
        activeLink: '#161616'
      }
    },
  },
  plugins: [],
}

