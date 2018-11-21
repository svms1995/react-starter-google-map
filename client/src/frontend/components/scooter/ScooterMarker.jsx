import React from 'react';
const  iconMarker = require('../../assets/images/scooter-icon.png');
import {  Marker } from 'google-maps-react';

export default class ScooterMarker extends React.Component{

	render() {

		console.log('heilo.,,lllllllll');
		console.log(this.props);
		return <Marker
            onClick = { this.props.onClick }
            icon= {iconMarker}
            title = { `Battery ${this.props.scooter.battery}%` }
            position = {{ lat: parseFloat(this.props.scooter.lat), lng: parseFloat(this.props.scooter.lng) }}
            name = {`scooter_marker_${this.props.scooter.id}`}
            battery={this.props.scooter.battery}
            scooter_id={ this.props.scooter.id }
            scooter_serial_code={this.props.scooter.serial_code}
          />
	}
}