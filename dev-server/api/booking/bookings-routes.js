import express from 'express';
const router = express.Router();
import * as controller from './bookings-controller';
import * as auth from '../../services/auth-service';

router.post('/booking', auth.requireLogin, controller.create);
router.get('/booking', auth.requireLogin, controller.index);
router.get('/booking/:id', auth.requireLogin, controller.show);
router.put('/booking', auth.requireLogin, controller.update);
router.delete('/booking/:id', auth.requireLogin, controller.remove);

export default router;