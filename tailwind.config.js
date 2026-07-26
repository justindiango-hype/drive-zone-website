/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Inter', 'sans-serif'] 
      },
      colors: {
        brandYellow: '#ffcc00',
        brandGreen: '#1ed760',
        darkBg: '#0f1011',
        cardBg: '#1a1b1e',
        borderColor: '#2d2e32'
      }
    }
  },
  plugins: [],
}