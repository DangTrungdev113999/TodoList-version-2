import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import styles from './styles';

class TaskSearch extends Component {
  render() {
    const { classes, onSearch } = this.props;
    return (
      <div className={classes.wrapper}>
        <form className={classes.container} noValidate>
          <TextField
            autoComplete="off"
            className={classes.textField}
            label="search"
            style={{ margin: 20, width: 300 }}
            placeholder="enter keywordll"
            onChange={onSearch}
          />
        </form>
      </div>
    );
  }
}

TaskSearch.propsTypes = {
  classes: PropTypes.object,
  onSearch: PropTypes.func,
};

export default withStyles(styles)(TaskSearch);
