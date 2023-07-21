import express from 'express';
import { createMiskin, deleteMiskin, getMiskinById, getMiskins, updateMiskin, getMiskinByKec } from '../controllers/Miskin.js';
import { verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/miskins', verifyUser, getMiskins);
router.get('/miskins/:id', verifyUser, getMiskinById);
router.get('/miskins/kecamatan/:nama_kecamatan', verifyUser, getMiskinByKec); // Updated route path
router.post('/miskins', verifyUser, createMiskin);
router.patch('/miskins/:id', verifyUser, updateMiskin);
router.delete('/miskins/:id', verifyUser, deleteMiskin);

export default router;
