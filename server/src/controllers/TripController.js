import faker from 'faker';
import AppController from './AppController';
/**
 * To Manage the Trip request
 */
class TripController extends AppController {
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

		this.data.trips = [];

		for (let i = 0; i < 50; i++) {
			this.data.trips.push({
				trip_date: faker.date.past,
				trip_duration: faker.random.number(10, 200),
				vehicle_id: faker.random.number(1000, 9999),
			});
		}

		this.response(req, res, next);
	}
}

export default TripController;
