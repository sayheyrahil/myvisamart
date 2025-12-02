/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wix: ["Wix Madefor Display"],
      },
      colors: {
        brand: '#0A509F',
      },
    },

  },
  plugins: [
    require('tailwindcss-animate'),
   ],
}

