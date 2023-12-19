/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter-bold':['Inter Bold'],
        'inter-regular':['Inter Regular'],
        'inter-xbold':['Inter Xbold'],
        'inter-light':['Inter Light'],
        'inter-xlight':['Inter Xlight'],
        'inter-medium':['Inter Medium'],
        'inter-semibold':['Inter Semibold'],
        'inter-thin':['Inter Thin'],
        'inter-tight-bold':['Inter Tight Bold'],
        'inter-tight-semibold':['Inter Tight Semibold'],
      }
    },
  },
  plugins: [],
}