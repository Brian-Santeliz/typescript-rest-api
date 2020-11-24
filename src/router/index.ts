import { Router } from "express";
import { getController } from "../controllers/homeController";
const router = Router();
router.get("/", getController);

export default router;
