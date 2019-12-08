import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid, Card, Fab, CardActions, CardContent, Typography } from '@material-ui/core';
import { Add } from "@material-ui/icons"

import styles from "./styles";
import { STATUS } from "./../../constants"

let listTask = [
  {
    id: 1,
    title: "learn javavscript",
    descriptiion: "this. is description",
    status: 1
  },
  {
    id: 1,
    title: "learn redux",
    descriptiion: "this. is description",
    status: 0
  },
  {
    id: 1,
    title: "learn redux-saga",
    descriptiion: "this. is description",
    status: 2
  },
  {
    id: 1,
    title: "learn maturial UI",
    descriptiion: "this. is description",
    status: 3
  }
]

class Taskboard extends Component {

  renderBoard = () => {
    const { classes } = this.props;
    let board = null;
    board = (
      <Grid container spacing={2}>
        {STATUS.map( status => {
          let taskFilered = listTask.filter(item => item.status === status.value)
          return  (
                <Grid item md={4} sm={12} key={status.value}>
                  <div className={classes.status} >{status.label}</div>
                  <div className={classes.wrapperListTask}>
                    {
                      taskFilered.map(item => {
                        const { id, title, descriptiion, status } = item;
                        return (
                          <Card>
                            <CardContent>
                              <Grid container justify="space-between">
                                <Grid item md={8}>
                                  <Typography>
                                    {title}
                                  </Typography>
                                </Grid>
                                <Grid item md={4}>
                                  {status.label}  
                                </Grid>
                              </Grid>
                            </CardContent>
                            <CardActions>
                            <Fab size="small" color="primary" aria-label="add">
                              <Add />
                            </Fab>
                            </CardActions>
                          </Card>
                        )
                      })              
                    }
                  </div>
                </Grid>
              )
        })}
      </Grid>
    ) 
    return board;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboad}>
        <Button  variant="contained" color="primary"> 
          <Add/> &nbsp; Thêm mới công việc
        </Button>
        {this.renderBoard()}
      </div> 
    )
  }
}

export default withStyles(styles)(Taskboard);