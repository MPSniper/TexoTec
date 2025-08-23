import express from "express";
import {
  getAllElectronics,
  createElectronics,
  deleteElectronics,
  getElectronicsById,
  updateElectronics,
} from "../controllers/electronicsController.js";

const router = express.Router();

router.get("/", getAllElectronics);
router.get("/:id", getElectronicsById);
router.post("/", createElectronics);
router.put("/:id", updateElectronics);
router.delete("/:id", deleteElectronics);

export default router;
