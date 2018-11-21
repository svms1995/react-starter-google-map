'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _TripController = require('../controllers/TripController');

var _TripController2 = _interopRequireDefault(_TripController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable new-cap */
let router = (0, _express.Router)();
/* eslint-enable new-cap */

const tripCtl = new _TripController2.default();

router.get('/', tripCtl.index);

exports.default = router;
//# sourceMappingURL=trip.js.map