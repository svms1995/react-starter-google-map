import faker from 'faker';
import AppController from './AppController';
import getGeoLocation from '../geoLocation';

/**
 * Handle the Scooter Request like list and more.
 */
class ScooterController extends AppController {
	/**
	 * Configure controller
	 */
	constructor() {
		super();
		this.index = this.index.bind(this);
	}
	/**
	* @param {Object} req The request object
	* @param {Object} res The response object
	* @param {function} next The callback to the next program handler
	* @return {void}
	*/
	index(req, res, next) {
		res.setHeader('Content-Type', 'application/json');

		this.data.scooters = [];

		for (let i = 0; i < 50; i++) {
			
			let location = getGeoLocation(1.290270, 103.851959, 1000);

			this.data.scooters.push({
				lat: location.latitude,
				lng: location.longitude,
				battery: faker.random.number(100),
				serial_code: faker.random.number(9999),
				id: faker.random.uuid(),
			});
		}

		this.response(req, res, next);
	}
}

export default ScooterController;
