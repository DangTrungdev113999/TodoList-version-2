import React, { Component } from 'react';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';

import Taskboard from '../Taskboard/index';
import GlobalLoading from '../../components/GlobalLoading/index';
import Modal from '../../components/Modal/index';
import styles from './styles';
import theme from '../../common/theme';

import configStore from '../../redux/configStore';

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalLoading />
          <Taskboard />
          <Modal />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
