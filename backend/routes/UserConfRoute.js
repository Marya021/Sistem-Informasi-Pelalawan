import express from 'express';
import { verifyUser } from '../middleware/AuthUser.js';
import { createUserConf, deleteUserConf, getUserConfById, getUserConfs, updateUserConf } from '../controllers/UserConfs.js';
const router = express.Router();

router.get('/userconfs', verifyUser, getUserConfs);
router.get('/userconfs/:id', verifyUser, getUserConfById);
router.post('/userconfs', createUserConf);
router.patch('/userconfs/:id', verifyUser, updateUserConf);
router.delete('/userconfs/:id', verifyUser, deleteUserConf);

export default router;
