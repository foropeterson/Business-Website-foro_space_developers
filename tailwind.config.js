/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Circle': "url('./src/assets/img/header/Circle.svg')",
      },
      colors: {
        rootOrange: '#FF823B',
        rootGreen: '#124F48',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
