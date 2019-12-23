/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  Fab,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';

import styles from './styles';

class TaskList extends Component {
  render() {
    const { title, description } = this.props.item;
    const { classes, label, onEditTask, item } = this.props;
    return (
      <Card style={{ marginTop: '15px', background: '#ecf0f1' }}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4} className={classes.status}>
              {label}
            </Grid>
            <Grid item md={12}>
              <p>{description}</p>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.actionBtn}>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={() => onEditTask(item)}
          >
            <Add />
          </Fab>
          <Fab size="small" color="secondary" aria-label="delete">
            <Delete />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskList);
