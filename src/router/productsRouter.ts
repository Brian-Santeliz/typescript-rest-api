import { Router } from "express";
import * as controller from "../controllers/productsController";
const router = Router();
router.get("/", controller.getControllerProduct);
router.get("/:id", controller.getIdControllerProduct);
router.delete("/:id", controller.deleteControllerProduct);
router.post("/", controller.postControllerProduct);
export { router as productRouter };
