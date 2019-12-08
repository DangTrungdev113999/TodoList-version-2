import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from '@material-ui/core';
import { Add } from "@material-ui/icons"

import styles from "./styles";
import { STATUS } from "./../../constants";

import TaskItem from "./../../components/TaskItem/index";
import TaskForm from "./../../components/TaskForm/index";

let listTask = [
  {
    id: 1,
    title: "learn javavscript",
    description: "this. is description",
    status: 1
  },
  {
    id: 1,
    title: "learn redux",
    description: "this. is description",
    status: 0
  },
  {
    id: 1,
    title: "learn redux-saga",
    description: "this. is description",
    status: 2
  },
  {
    id: 1,
    title: "learn maturial UI",
    description: "this. is description",
    status: 3
  }
]

class Taskboard extends Component {
  state = {
    open: false
  }

  renderBoard = () => {
    let board = null;
    board = (
      <Grid container spacing={2}>
        {STATUS.map( (status, index) => {
          const {  label } = status;
          let taskFilered = listTask.filter(item => item.status === status.value)
          return  <TaskItem  taskFilered={taskFilered} label={label} key={index}/>
        })}
      </Grid>
    ) 
    return board;
  }

  onHandleOpen = () => {
    this.setState({
      open: true
    })
  }

  onHandleCloase = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.taskboad}>
        <Button  variant="contained" color="primary" onClick={this.onHandleOpen}> 
          <Add/> &nbsp; Thêm mới công việc
        </Button>

        {this.renderBoard()}
        
        <TaskForm open={open} onClose={this.onHandleCloase} />
      </div> 
    )
  }
}

export default withStyles(styles)(Taskboard);