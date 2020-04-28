import express from 'express';
const router = express.Router();
import * as controller from './register.controller';
// POST function for the register express route to register users
router.post('/register', controller.index);
// exports the router
export default router;