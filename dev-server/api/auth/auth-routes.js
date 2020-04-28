import express from 'express';
const router = express.Router();
import * as controller from './auth-controller';
// Authorization for the express router
router.post('/auth', controller.index);
// exports the express router
export default router;