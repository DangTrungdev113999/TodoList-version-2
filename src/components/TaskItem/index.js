import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Chip } from '@material-ui/core';
import { Android } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import TaskList from '../TaskList/index';

class TaskItem extends Component {
  render() {
    const { classes, taskFilered, label, onEditTask } = this.props;
    return (
      <Grid item md={4} sm={12}>
        <div className={classes.status}>
          <Chip icon={<Android />} label={label} color="primary" clickable />
        </div>

        <div className={classes.wrapperListTask}>
          {taskFilered.map(item => {
            return (
              <TaskList
                item={item}
                label={label}
                key={item.id}
                onEditTask={onEditTask}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  taskFilered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.number,
    }),
  ),
  label: PropTypes.string,
};

export default withStyles(styles)(TaskItem);
