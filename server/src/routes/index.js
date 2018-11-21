import {Router} from 'express';

/* eslint-disable new-cap */
let router = Router();
/* eslint-enable new-cap */

import scooter from './scooter';
import trip from './trip';

/**
 * Home Page Router
 */

router.get('/', (req, res) => {
	res.send('Home Page..');
});


/**
 * Scooter section routes
 */
router.use('/scooter', scooter);

/**
 * Trip section routes
 */
router.use('/trip', trip);

module.exports = router;
