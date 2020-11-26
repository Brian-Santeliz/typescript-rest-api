import { Router } from "express";
import * as controller from "../controllers/productsController";
const router = Router();
router.get("/", controller.getControllerProduct);
router.get("/:id", controller.getIdControllerProduct);
router.post("/", controller.postControllerProduct);
router.put("/:id", controller.putControllerProduct);
router.delete("/:id", controller.deleteControllerProduct);
export { router as productRouter };
