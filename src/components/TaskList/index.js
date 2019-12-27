/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
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
import PropTypes from 'prop-types';
import { Delete, Edit } from '@material-ui/icons';

import styles from './styles';

class TaskList extends Component {
  render() {
    const { title, description } = this.props.item;
    const { classes, label, onEditTask, item, onDeleteTask } = this.props;
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
            <Edit />
          </Fab>
          <Fab
            size="small"
            color="secondary"
            aria-label="delete"
            onClick={() =>
              confirm(`Do you want to delelte ${item.title}`)
                ? onDeleteTask(item.id)
                : null
            }
          >
            <Delete />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  classes: PropTypes.object,
  label: PropTypes.string,
  onEditTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
};

export default withStyles(styles)(TaskList);
