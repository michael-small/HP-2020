import { createMuiTheme } from "@material-ui/core/styles"

let theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
})

theme = createMuiTheme({
  ...theme,
  overrides: {
    MuiContainer: {
      root: {
        [theme.breakpoints.up("sm")]: {
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.only("md")]: {
          paddingLeft: theme.spacing(7),
          paddingRight: theme.spacing(7),
        },
        [theme.breakpoints.up("lg")]: {
          paddingLeft: theme.spacing(9),
          paddingRight: theme.spacing(9),
        },
      },
    },
  },
})

export default theme
