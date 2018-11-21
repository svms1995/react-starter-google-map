'use strict';

var _express = require('express');

var _scooter = require('./scooter');

var _scooter2 = _interopRequireDefault(_scooter);

var _trip = require('./trip');

var _trip2 = _interopRequireDefault(_trip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable new-cap */
let router = (0, _express.Router)();
/* eslint-enable new-cap */

/**
 * Home Page Router
 */

router.get('/', (req, res) => {
  res.send('Home Page..');
});

/**
 * Scooter section routes
 */
router.use('/scooter', _scooter2.default);

/**
 * Trip section routes
 */
router.use('/trip', _trip2.default);

module.exports = router;
//# sourceMappingURL=index.js.map