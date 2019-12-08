import React, { Component } from 'react';
import { Grid, Chip } from '@material-ui/core';
import { Android } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import TaskList from '../TaskList';

class TaskItem extends Component {
  render() {
    const { classes, taskFilered, label } = this.props;
    return (
      <Grid item md={4} sm={12}>
        <div className={classes.status}>
          <Chip icon={<Android />} label={label} color="primary" clickable />
        </div>

        <div className={classes.wrapperListTask}>
          {taskFilered.map(item => {
            return <TaskList item={item} label={label} key={item.id} />;
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskItem);
