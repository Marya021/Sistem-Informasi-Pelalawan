import express from 'express';
import { verifyUser } from '../middleware/AuthUser.js';
import { createDesaKelurahan, deleteDesaKelurahan, getDesaKelurahanById, getDesaKelurahans, updateDesaKelurahan } from '../controllers/DesaKelurahan.js';

const router = express.Router();

router.get('/desakelurahan', verifyUser, getDesaKelurahans);
router.get('/desakelurahan/:id', verifyUser, getDesaKelurahanById);
router.post('/desakelurahan', verifyUser, createDesaKelurahan);
router.patch('/desakelurahan/:id', verifyUser, updateDesaKelurahan);
router.delete('/desakelurahan/:id', verifyUser, deleteDesaKelurahan);

export default router;
