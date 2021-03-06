import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#3f51b5',
    secondary: '#FF5252',
    text: '#ffffff',
    error: '#D32F2F',
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 12,
  },
});

export default theme;
