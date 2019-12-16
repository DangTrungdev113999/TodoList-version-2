import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';

import styles from './styles';
import { STATUS } from '../../constants';
import TaskItem from '../../components/TaskItem/index';
import TaskForm from '../../components/TaskForm/index';
import TaskSearch from '../../components/TaskSearch';

class Taskboard extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  renderBoard = () => {
    let board = null;
    const { listTask } = this.props;
    board = (
      <Grid container spacing={2}>
        {STATUS.map(status => {
          const { label } = status;
          const taskFilered = listTask.filter(
            item => item.status === status.value,
          );
          return (
            <TaskItem
              taskFilered={taskFilered}
              label={label}
              key={status.value}
            />
          );
        })}
      </Grid>
    );
    return board;
  };

  onHandleOpen = () => {
    this.setState({
      open: true,
    });
  };

  onHandleCloase = () => {
    this.setState({
      open: false,
    });
  };

  onHandleSearch = e => {
    e.preventDefault();
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { searchTask } = taskActionCreators;
    searchTask(value);
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.taskboad}>
        <Button variant="contained" color="primary" onClick={this.onHandleOpen}>
          <Add /> &nbsp; Thêm mới công việc
        </Button>

        <TaskSearch onSearch={this.onHandleSearch} />

        {this.renderBoard()}

        <TaskForm open={open} onClose={this.onHandleCloase} />
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    searchTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard),
);
