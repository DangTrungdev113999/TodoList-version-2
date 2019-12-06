import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

class Taskboad extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboad}>
        <div className={classes.shape} >ReactJS</div>
        <div className={classes.shape} >NodeJS</div>
      </div>
    )
  }
}

export default withStyles(styles)(Taskboad);