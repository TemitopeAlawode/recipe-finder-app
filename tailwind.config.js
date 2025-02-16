/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: { // setting screen break points
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage:{
        'home-bg': "url('/src/assets/images/bg-cook.jpg')",
        'small-screen-home-bg': "url('/src/assets/images/bg-food1.jpg')"
      },
      height:{
        'home-height': '80vh',
        'header-height': '20vh'
      }
    },
  },
  plugins: [],
}

