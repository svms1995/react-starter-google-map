import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Typography from '@material-ui/core/Typography';

class Footer extends React.Component {

	render () {
		
		const {classes} = this.props;

		return (

			<footer className={classes.footer}>
		        <Typography variant="subheading" color="primary" align="center" gutterBottom>
		          Copyright © 2018, Singsys Pte. Ltd. All Rights Reserved.
		        </Typography>
		    </footer> 
		);
	}
}

export default Footer;