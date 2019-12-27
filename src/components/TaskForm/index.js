import { Button, Grid, Box, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import renderTextField from '../FormHelper/TextField';
import validate from './validate';
import styles from './styles';
import renderSelectField from '../FormHelper/SelectField';
import { STATUS } from '../../constants/index';

class TaskForm extends Component {
  handleValue = data => {
    const { title, description, status } = data;
    const { taskActionCreators, initialValues } = this.props;
    const { addTask, updateTask } = taskActionCreators;
    if (initialValues && initialValues.title) {
      return updateTask(title, description, status);
    }
    return addTask(title, description);
  };

  renderSelecter = () => {
    const xhtml = null;
    const { classes, initialValues } = this.props;
    if (initialValues && initialValues.title) {
      return (
        <Grid item md={12}>
          <Field
            classes={classes.select}
            name="status"
            id="status"
            component={renderSelectField}
            label="status"
          >
            {STATUS.map(option => (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>
        </Grid>
      );
    }
    return xhtml;
  };

  render() {
    const {
      modalActionCreators,
      handleSubmit,
      submiting,
      invalid,
    } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleValue)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="title"
              name="title"
              label="title"
              component={renderTextField}
              placeholder="Nhập tiêu đề"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <Field
              component={renderTextField}
              name="description"
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              multiline
            />
          </Grid>
          {this.renderSelecter()}
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => hideModal()}
              >
                Cancel
              </Button>
              <Box mr={1}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submiting || invalid}
                >
                  Ok
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  taskActionCreators: PropTypes.shape({
    addTask: PropTypes.func,
    updateTask: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  submiting: PropTypes.bool,
  invalid: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  initialValues: PropTypes.object,
  classes: PropTypes.object,
};

const mapStateToProps = state => ({
  initialValues: {
    title: state.task.taskEdit ? state.task.taskEdit.title : null,
    description: state.task.taskEdit ? state.task.taskEdit.description : null,
    status: state.task.taskEdit ? state.task.taskEdit.status : null,
  },
});

const mapDispatchToProps = dispatch => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
  taskActionCreators: bindActionCreators(taskActions, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: 'handle_task',
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
