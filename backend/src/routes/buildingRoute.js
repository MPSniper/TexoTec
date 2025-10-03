import express from "express";
import {
  getAllBuildings,
  getBuildingById,
  createBuilding,
  updateBuilding,
  deleteBuilding,
} from "../controllers/buildingController.js";
const router = express.Router();

router.get("/", getAllBuildings);
router.get("/:id", getBuildingById);
router.post("/", createBuilding);
router.put("/:id", updateBuilding);
router.delete("/:id", deleteBuilding);

export default router;
