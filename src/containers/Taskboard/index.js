import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';

import styles from './styles';
import { STATUS } from '../../constants';
import TaskItem from '../../components/TaskItem/index';
import TaskForm from '../../components/TaskForm/index';
import TaskSearch from '../../components/TaskSearch';

class Taskboard extends Component {
  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  onEditTask = task => {
    const { taskActionCreators, modalActionCreators } = this.props;
    const {
      showModal,
      changeModalTile,
      changeModalContent,
    } = modalActionCreators;

    const { setTaskEdit } = taskActionCreators;
    setTaskEdit(task);
    showModal();
    changeModalTile('Cập nhật công việc');
    changeModalContent(<TaskForm />);
  };

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
              onEditTask={this.onEditTask}
            />
          );
        })}
      </Grid>
    );
    return board;
  };

  onHandleOpen = () => {
    const { modalActionCreators, taskActionCreators } = this.props;
    const { setTaskEdit } = taskActionCreators;
    const {
      showModal,
      changeModalTile,
      changeModalContent,
    } = modalActionCreators;
    setTaskEdit(null);

    showModal();
    changeModalTile('Thêm mới công việc');
    changeModalContent(<TaskForm />);
  };

  onHandleCloase = () => {
    const { modalActionCreators } = this.props;
    const {
      hideModal,
      changeModalTile,
      changeModalContent,
    } = modalActionCreators;

    hideModal();
    changeModalTile('');
    changeModalContent({});
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
    return (
      <div className={classes.taskboad}>
        <Button variant="contained" color="primary" onClick={this.onHandleOpen}>
          <Add /> &nbsp; Thêm mới công việc
        </Button>

        <TaskSearch onSearch={this.onHandleSearch} />

        {this.renderBoard()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    searchTask: PropTypes.func,
    setTaskEdit: PropTypes.func,
  }),
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTile: PropTypes.func,
    changeModalContent: PropTypes.func,
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
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard),
);
