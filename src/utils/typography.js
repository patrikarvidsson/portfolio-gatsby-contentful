import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 5,
  headerFontFamily: ['arno-pro-display', 'serif'],
  headerGray: 0,
  headerWeight: '500',
  bodyFontFamily: ['source-sans-pro', 'sans-serif'],
  bodyGray: 30,
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    h2: {
      marginBottom: rhythm(1 / 3),
      marginTop: rhythm(2),
    },
    'h3,h4': {
      marginBottom: rhythm(2 / 3),
      marginTop: rhythm(2 / 3),
    },
    p: {
      marginBottom: rhythm(1 / 2),
    },
  }),
})

export default typography
