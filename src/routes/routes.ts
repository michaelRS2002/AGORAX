import express from 'express';
import authRouter from './auth';
import meetingsRouter from './meetings';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/meetings', meetingsRouter);

export default router;
