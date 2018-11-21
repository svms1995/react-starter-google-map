import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
const  logoUrl = require('../assets/images/scooter-icon.png');
import Typography from '@material-ui/core/Typography';


class Head extends React.Component {

	render () {
		const {classes} = this.props;

		return (

			<AppBar className={classes.appBar}>
				<Toolbar>
				  <img src={logoUrl} alt="Scooter"/>
				  <Typography variant="headline" color="inherit" noWrap>
				    Ride Beam
				  </Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Head;