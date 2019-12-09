import React, { Component } from 'react';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import Taskboard from './../Taskboard/index';
import styles from './styles';
import theme from './../../common/theme';

import configStore from './../../redux/configStore';

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
