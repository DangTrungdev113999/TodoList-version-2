import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    primary: "#7B1FA2",
    secondary: "#FF5252",
    text: "#ffffff",
    error: "#D32F2F"
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 12
  }
})

export default theme;