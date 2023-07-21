import express from "express";
import {
  getStuntens,
  getStuntenById,
  saveStunten,
  updateStunten,
  deleteStunten,
} from "../controllers/Stunten.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/stuntens", verifyUser, getStuntens);
router.get("/stuntens/:id", verifyUser, getStuntenById);
router.post("/stuntens", verifyUser, saveStunten);
// router.patch('/products/:id', verifyUser, updateProduct);
// router.delete('/products/:id', verifyUser, deleteProduct);

export default router;
