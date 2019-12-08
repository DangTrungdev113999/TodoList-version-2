import React, { Component } from "react";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";

import Taskboard from "./../Taskboard/index";
import styles from "./styles";
import theme from "./../../common/theme";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Taskboard/>
      </ThemeProvider>
    )
  }
}

export default withStyles(styles)(App);