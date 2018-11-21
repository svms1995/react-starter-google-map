import {Router} from 'express';

/* eslint-disable new-cap */
let router = Router();
/* eslint-enable new-cap */

import TripController from '../controllers/TripController';

const tripCtl = new TripController();

router.get('/', tripCtl.index);

export default router;
