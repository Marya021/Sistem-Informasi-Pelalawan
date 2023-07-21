import express from 'express';
import { verifyUser } from '../middleware/AuthUser.js';
import { createKecamatan, deleteKecamatan, getKecamatanById, getKecamatans, updateKecamatan } from '../controllers/Kecamatan.js';

const router = express.Router();

router.get('/kecamatans', verifyUser, getKecamatans);
router.get('/kecamatans/:id', verifyUser, getKecamatanById);
router.post('/kecamatans', verifyUser, createKecamatan);
router.patch('/kecamatans/:id', verifyUser, updateKecamatan);
router.delete('/kecamatans/:id', verifyUser, deleteKecamatan);

export default router;
