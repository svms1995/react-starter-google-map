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
 * Handle the Scooter Request like list and more.
 */
class ScooterController extends _AppController2.default {
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
			this.data.scooters.push({
				lat: _faker2.default.address.latitude(),
				long: _faker2.default.address.longitude(),
				battery: _faker2.default.random.number(10, 100),
				serial_code: _faker2.default.random.number(1000, 9999)
			});
		}

		this.response(req, res, next);
	}
}

exports.default = ScooterController;
//# sourceMappingURL=ScooterController.js.map