import { Button, Grid, Box } from '@material-ui/core';
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

class TaskForm extends Component {
  handleValue = data => {
    const { title, description } = data;
    const { taskActionCreators } = this.props;
    const { addTask } = taskActionCreators;
    addTask(title, description);
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
  }),
  handleSubmit: PropTypes.func,
  submiting: PropTypes.bool,
  invalid: PropTypes.bool,
};

const mapStateToProps = state => ({});

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
