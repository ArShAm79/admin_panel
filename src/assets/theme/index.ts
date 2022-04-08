// import { createTheme } from '@mui/styles'
import { createTheme, responsiveFontSizes } from '@material-ui/core'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const lightPalette: PaletteOptions = {
  // type: 'light',
  primary: {
    main: 'rgb(203, 225, 242)',
    light: '#534bae',
    dark: 'rgb(103, 125, 142)',
    contrastText: 'rgb(14, 13, 15)'
  },
  secondary: {
    main: 'rgba(255,255,255,0.7)',
    light: 'rgba(255,255,255,0.4)',
    dark: 'rgba(255,255,255,0.6)',
    contrastText: 'rgb(42, 84, 211)'
  },
  text: {
    primary: 'rgba(255,255,255,0.95)',
    secondary: 'rgba(255,255,255,0.8)'
    // disabled: '#000000',
    // contrastText: '#FFF'
  },

  background: {
    default: 'rgb(45, 50, 80)'
  },
  type: 'light'
}

// const DarkPalette = {
//   type: 'dark',
//   primary: {
//     main: '#7884ff',
//     light: '#7884ff',
//     dark: '#1c2ab0',
//     contrastText: '#ffffff'
//   },
//   secondary: {
//     main: '#151515',
//     light: '#999',
//     dark: '#000000',
//     contrastText: '#ffffff'
//   },
//   background: {
//     default: '#252525'
//   }
// }

const theme = createTheme({
  direction: 'rtl',
  palette: lightPalette,
  //   fontFamily: 'Open Sans',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      //   avrageLGXL: 1480,

      xl: 1680
    }
  },
  typography: {
    // useNextVariants: true,
    fontFamily: 'Open Sans',
    fontWeightRegular: 600,
    fontWeightMedium: 800,
    fontSize: 16,
    // fontStyle: 'normal',
    // fontStretch: 'normal',
    // letterSpacing: 'normal',
    // fontWeight: 600,
    // lineHeight: 1,
    allVariants: {
      fontFamily: 'Open Sans'
    },
    h6: {
      fontSize: 12,
      // color: lightPalette.primary.light,
      lineHeight: '15px',
      fontWeight: 600
    },
    h5: {
      fontSize: 14,
      fontWeight: 800,
      color: '#797979'
    },
    h4: {
      fontSize: 16,
      fontWeight: 800
      // color: lightPalette.secondary?.dark
    },
    h3: {
      fontSize: 24,
      fontWeight: 600
      // color: lightPalette.secondary?.dark
    },
    h2: {
      fontSize: 28,
      // color: lightPalette.secondary.dark,
      fontWeight: 600
    },
    h1: {
      fontSize: 35,
      fontWeight: 600
      // color: lightPalette.secondary.main
    },
    body1: {
      fontSize: 16,
      fontWeight: 600
      // color: lightPalette.secondary.light
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 600
      // color: lightPalette.primary.light
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 600
      // color: lightPalette.primary.light
    },
    button: {
      fontSize: 12,
      textTransform: 'none'
    }
  }
})
// const DarkTheme = createMuiTheme({
//   direction: getDirection(),
//   palette: DarkPalette,
//   fontFamily: getFont(),
//   typography: {
//     breakpoints: {
//       values: {
//         xs: 0,
//         sm: 600,
//         md: 960,
//         lg: 1280,
//         avrageLGXL: 1480,
//         xl: 1680
//       }
//     },
//     useNextVariants: true,
//     fontFamily: getFont(),
//     fontWeightRegular: 600,
//     fontWeightMedium: 800,
//     fontSize: 16,
//     fontStyle: 'normal',
//     fontStretch: 'normal',
//     letterSpacing: 'normal',
//     fontWeight: 600,
//     lineHeight: 1,
//     allVariants: {
//       fontFamily: getFont()
//     },
//     h6: {
//       fontSize: 12,
//       color: DarkPalette.primary.light,
//       lineHeight: '15px',
//       fontWeight: 600
//     },
//     h5: {
//       fontSize: 14,
//       fontWeight: 800,
//       color: '#797979'
//     },
//     h4: {
//       fontSize: 16,
//       fontWeight: 800,
//       color: DarkPalette.secondary.contrastText
//     },
//     h3: {
//       fontSize: 24,
//       fontWeight: 600,
//       color: DarkPalette.secondary.contrastText
//     },
//     h2: {
//       fontSize: 28,
//       color: DarkPalette.secondary.contrastText,
//       fontWeight: 600
//     },
//     h1: {
//       fontSize: 35,
//       fontWeight: 600,
//       color: DarkPalette.secondary.contrastText
//     },
//     body1: {
//       fontSize: 16,
//       fontWeight: 600,
//       color: DarkPalette.secondary.contrastText
//     },
//     subtitle1: {
//       fontSize: 18,
//       fontWeight: 600,
//       color: DarkPalette.primary.light
//     },
//     subtitle2: {
//       fontSize: 16,
//       fontWeight: 600,
//       color: DarkPalette.primary.light
//     },
//     button: {
//       fontSize: 12,
//       textTransform: 'none'
//     }
//   }
// })
const lightTheme = responsiveFontSizes(theme)
// const darkTheme = responsiveFontSizes(DarkTheme)
export default lightTheme
