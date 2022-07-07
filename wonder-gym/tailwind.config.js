module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': 'Montserrat',
        'bebasNeue': 'Bebas Neue',
      },

      colors: {
        'main-gray': '#282828',
        'main-gray-95-transp': '#282828F2',
        'main-gold': '#E5AC2D',
        'main-blue': '#2E6FE6',
        'main-blue-transparent': '#2E6FE680',
        'secundary-blue' : '#003699',
      },
    },
  },
  plugins: [],
}
