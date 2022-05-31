module.exports = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'Baskervvol-Base': ['Baskervool-Base'],
        'NotCourierSans': ['NotCourierSans'],
        'ABeeZee' : ['ABeeZee']
      }
    },
  },
  plugins: [require ('@tailwindcss/typography')],
}