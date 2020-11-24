import { Router } from "express";
import { getControllerProduct } from "../controllers/productsController";
const router = Router();
router.get("/", getControllerProduct);
export { router as productRouter };
