import { Button, TextField, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as modalActions from '../../actions/modal';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form>
        <Grid container>
          <Grid item md={12}>
            <TextField
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <TextField
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
                <Button variant="contained" color="primary">
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
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskForm);
