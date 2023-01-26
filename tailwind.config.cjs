module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      green: '#04ddb2',
      white: '#fff',
      black: '#333',
      gray: '#767676'
    },
    borderRadius: {
      none: '0px',
      sm: '2px',
      DEFAULT: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      '2xl': '16px',
      '3xl': '24px',
      full: '9999px'
    },
    fontFamily: {
      serif: ['Montserrat', 'sans-serif']
    }
  },
  plugins: []
}
