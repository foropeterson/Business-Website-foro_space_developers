/** @type {import('tailwindcss').Config} */
export default {
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
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
