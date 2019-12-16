import React, { Component } from 'react';
import PropsTyes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import loadingIcon from 'file-loader?modules!./../../assets/images/loading3.gif';

import styles from './styles';

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    return (
      showLoading && (
        <div className={classes.globalLoading}>
          <img src={loadingIcon} alt="loading" className={classes.icon} />
        </div>
      )
    );
  }
}

GlobalLoading.propTypes = {
  classes: PropsTyes.object,
  showLoading: PropsTyes.bool,
};

const mapStatesToProps = state => ({
  showLoading: state.ui.showLoading,
});

const withConnect = connect(mapStatesToProps, null);
export default compose(withStyles(styles), withConnect)(GlobalLoading);
