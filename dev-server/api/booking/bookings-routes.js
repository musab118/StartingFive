import express from 'express';
const router = express.Router();
import * as controller from './bookings-controller';
import * as auth from '../../services/auth-service';
// The booking routes in express router which posts,gets puts and deletes
// POST method
router.post('/booking', auth.requireLogin, controller.create);
//GET request to request data
router.get('/booking', auth.requireLogin, controller.index);
//GET request to request data
router.get('/booking/:id', auth.requireLogin, controller.show);
// PUT method is used to send data to the serfer
router.put('/booking', auth.requireLogin, controller.update);
//DELETE function to delete resources
router.delete('/booking/:id', auth.requireLogin, controller.remove);

export default router;