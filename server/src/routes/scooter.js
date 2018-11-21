import {Router} from 'express';

/* eslint-disable new-cap */
let router = Router();
/* eslint-enable new-cap */

import ScooterController from '../controllers/ScooterController';

const scooterCtl = new ScooterController();

router.get('/', scooterCtl.index);

export default router;
