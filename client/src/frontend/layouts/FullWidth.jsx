import { withStyles, MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import React from 'react';
import theme, { styles } from  '../configs/ThemeStyle';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';
import Footer from './Footer';
import Head from './Head';

import PropTypes from 'prop-types';

const  logoUrl = require('../assets/images/scooter-icon.png');

class FullWidth extends React.Component {

	/**
	 * Here we are setting up the Material Theme Base.
	 */
	render() {

		const {classes} = this.props;
		console.log('this.propsthis.propsthis.props');
		console.log(this.props);
		return (

			 <MuiThemeProvider theme={theme}>
				<CssBaseline />

				<Head {...this.props} />

				<main className={classes.main}>
					{this.props.children}
				</main>

				<Footer {...this.props} />
			 </MuiThemeProvider>
		)
	}
}

FullWidth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default new withStyles(styles)(FullWidth);