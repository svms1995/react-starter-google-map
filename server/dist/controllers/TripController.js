'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _AppController = require('./AppController');

var _AppController2 = _interopRequireDefault(_AppController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * To Manage the Trip request
 */
class TripController extends _AppController2.default {
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
				trip_date: _faker2.default.date.past,
				trip_duration: _faker2.default.random.number(10, 200),
				vehicle_id: _faker2.default.random.number(1000, 9999)
			});
		}

		this.response(req, res, next);
	}
}

exports.default = TripController;
//# sourceMappingURL=TripController.js.map