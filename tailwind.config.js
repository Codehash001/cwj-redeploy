const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Kanit: [ 'Kanit', ...defaultTheme.fontFamily.sans],
        Archivo: [ 'Archivo', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-01': 'var(--clr-c1)',
        'brand-02': 'var(--clr-c2)',
        'brand-03': 'var(--clr-c3)',
        'brand-04': 'var(--clr-c4)',
        'brand-05': 'var(--clr-c5)',
        'brand-06': 'var(--clr-c6)',
        'brand-yellow': 'var(--clr-yellow)',
        'brand-green': 'var(--clr-green)',
        'brand-blue': 'var(--clr-blue)',
        'brand-light': 'var(--clr-c7)'
      },
      animation: {
        'pulse-slow': 'pulse 10s linear infinite',
        animate :"animate 6s liner infinite",
        
      },
      keyframes:{
      animate:{'0% 10% 100%':{width:'0%'},
      '70%,80%,90%':{width:'100%'} }
      },
      backgroundImage: (theme)=>(
        {
          'bg2-img' : "url('../public/Banner2.png')"
        }
      )
    }
  },
  plugins: []
}
