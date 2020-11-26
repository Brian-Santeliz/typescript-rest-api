import { Router } from "express";
import * as controller from "../controllers/productsController";
const router = Router();
router.get("/", controller.getControllerProduct);
router.get("/:id", controller.getIdControllerProduct);
router.post("/", controller.postController);
export { router as productRouter };
