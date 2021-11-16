import { createTheme } from '@material-ui/core/styles'
import { indigo as primary, pink as secondary } from "@material-ui/core/colors"

export const theme = createTheme({
  palette: {
    primary,
    secondary
  },

  typography: {
    fontFamily: [
      "Noto Sans KR",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue"
    ].join(",")
  }
})
