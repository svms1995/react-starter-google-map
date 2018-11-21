'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _ScooterController = require('../controllers/ScooterController');

var _ScooterController2 = _interopRequireDefault(_ScooterController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable new-cap */
let router = (0, _express.Router)();
/* eslint-enable new-cap */

const scooterCtl = new _ScooterController2.default();

router.get('/', scooterCtl.index);

exports.default = router;
//# sourceMappingURL=scooter.js.map