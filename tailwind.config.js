module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: "#f46262",
        "cyan": 'hsl(172, 67%, 45%)',
        'cyan-50': 'hsl(189, 41%, 97%)',
        'cyan-100': 'hsl(185, 41%, 84%)',
        'cyan-200': 'hsl(184, 14%, 56%)',
        'cyan-300': 'hsl(186, 14%, 43%)',
        'cyan-400': 'hsl(183, 100%, 15%)'
      },
      spacing: {
        "header": "44.5rem"
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace']
      },
      letterSpacing: {
        "widest-xl": '.75em'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
