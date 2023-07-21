import express from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser, verifyingUser } from '../controllers/Users.js';
import { verifyUser, adminOnly } from '../middleware/AuthUser.js';
const router = express.Router();

router.get('/users', 
// verifyUser, 
// adminOnly, 
getUsers);
router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.post('/users', createUser);
router.patch('/users/:id', verifyUser, adminOnly, updateUser);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);
router.patch('/users/verify/:id', verifyUser, 
adminOnly,  verifyingUser);

export default router;