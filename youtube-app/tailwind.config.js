/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl':  "1279px",
        'lg':  "1023px",
        'kpx': "1000px",
        'md':  "767px",
        'sm': '636px',
        'nvr': "546px",
        'main': '550px',
        'ms': '500px',
        'nvs': "420px",
        'mins': "350px",
        'zero': "0px"
      },
    },
  },
  plugins: [],
}

