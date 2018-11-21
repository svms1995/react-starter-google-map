import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';

const  logoUrl = require('../images/scooter-icon.png');
import ScooterMap from './ScooterMap';

//import Layout from './Layout';

import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import  {connect } from 'react-redux';

import { mapDispatchToProps, mapStateToProps} from '../features/root/root-props';

import API from '../frontend/aep';



const theme = createMuiTheme({
  palette: {
    primary: {main: '#FFFFFF'},
    secondary: {main: '#000000'},
  },
});

const styles = theme => ({
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

  styleMain: {

    width: '100%',
    height: "calc(100vh - 109px)",
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'marginTop': '64px',
    'position': 'relative'
  }
});


function Album(props) {
  const { classes } = props;

  console.log('props')
  console.log(props)
  //var auth_end_point = {...API.SCOOTER_LIST};
  //props.callApi(auth_end_point)

  const styleMain = {
      width: '100%',
      height: "calc(100vh - 109px)",
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': '64px',
      'position': 'relative'
    }
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <img src={logoUrl} alt=""/>
          <Typography variant="headline" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main style={styleMain}>
        {/* Hero unit */}
          <ScooterMap/> 
        
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subheading" color="primary" align="center" gutterBottom>
          Copyright © 2018, Singsys Pte. Ltd. All Rights Reserved.
        </Typography>
      </footer> 
      {/* End footer */}
    </MuiThemeProvider>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Album));