import React, { Component } from 'react';
import { Modal } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import PropTypes from 'prop-types';

import styles from './styles';
import * as modalAction from '../../actions/modal';

class MyModal extends Component {
  render() {
    const {
      open,
      classes,
      title,
      component,
      modalActionCreactors,
    } = this.props;
    const { hideModal } = modalActionCreactors;
    return (
      <div>
        <Modal open={open}>
          <div className={classes.modal}>
            <div className={classes.header}>
              <span className={classes.title}>{title}</span>
              <Clear className={classes.icon} onClick={() => hideModal()} />
            </div>
            <div className={classes.content}> {component} </div>
          </div>
        </Modal>
      </div>
    );
  }
}

MyModal.propTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object,
  title: PropTypes.string,
  modalActionCreactors: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTile: PropTypes.func,
    // changeModalContent: PropTypes.func,
  }),
  component: PropTypes.object,
};

const mapStateToProps = state => ({
  open: state.modal.showModal,
  title: state.modal.title,
  component: state.modal.component,
});

const mapDispatchToProps = dispatch => ({
  modalActionCreactors: bindActionCreators(modalAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(MyModal);
