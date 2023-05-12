/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      yellow : "#FCB316",
      blue : "#1A1851",
      white : "#ffffff",
      gray:"#e7e7e7",
      red:"#ffffff",
      black: "#000000",
      darkYellow: "#FAB415"
    },

    screens: {

        'lg': {'max': '1220px'},
        // => @media (max-width: 1023px) { ... }

        'slg': {'max': '1100px'},
        // => @media (max-width: 1023px) { ... }

        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
 
  ],
}
