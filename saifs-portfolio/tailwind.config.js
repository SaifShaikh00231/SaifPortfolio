/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 10px rgba(23, 136, 174, 0.6), 0 0 30px rgba(23, 136, 174, 0.8), 0 0 60px rgba(23, 136, 174, 1)',
      },      
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        times:['Times New Roman'],
        poppins: ['Poppins', 'sans-serif'], // Add the custom font family
        helvetica:['HelveticaNeue', 'sans-serif'],
        merriweather:['Merriweather', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

