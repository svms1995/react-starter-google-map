import React from 'react';
import { mapDispatchToProps, mapStateToProps} from '../../features/root/root-props';
import FullWidthTemplte from '../layouts/FullWidth'
import ScooterMap from '../components/scooter/ScooterOnMap';
import  {connect } from 'react-redux';
import API from '../aep';

class Home extends React.Component {



	render () {

		return (

			<FullWidthTemplte {...this.props} >
				<ScooterMap {...this.props} />
			</FullWidthTemplte>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)