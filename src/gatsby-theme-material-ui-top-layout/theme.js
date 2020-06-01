import { createMuiTheme } from "@material-ui/core/styles"

let theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
    fontFamily: ["TT Commons", "Noto Sans JP"].join(","),
  },
})

theme = createMuiTheme({
  ...theme,
  overrides: {
    MuiButton: {
      label: {
        textTransform: "none",
        fontSize: "1.8rem",
      },
    },
    MuiPaginationItem: {
      page: {
        "&.Mui-selected.MuiPaginationItem-root": {
          "@media (hover: none)": {
            "&:hover":{
              backgroundColor: "rgba(0,0,0,0.12)"
            }
          }
        }
      }
    },
    MuiTypography: {
      body1: {
        fontSize: "1.8rem",
      },
    },
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
console.log(theme)

export default theme
