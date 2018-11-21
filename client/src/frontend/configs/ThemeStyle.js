import {  createMuiTheme  } from '@material-ui/core/styles';

export const styles = theme => ({
  appBar: {
    position: 'fixed',
  },
  footer: {
    backgroundColor: '#000000',
    padding: theme.spacing.unit,
    color: '#FFFFFF',
    top: 'auto',
    bottom: 0,
    zIndex:9999,
    position: 'fixed',
    width:'100%'
  },

  main: {

    width: '100%',
    height: "calc(100vh - 109px)",
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'marginTop': '64px',
    'position': 'relative'
  }
});

export default createMuiTheme({
  palette: {
    primary: {main: '#FFFFFF'},
    secondary: {main: '#000000'},
  },
});