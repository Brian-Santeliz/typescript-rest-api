import { Router } from "express";
import {
  getControllerProduct,
  postController,
} from "../controllers/productsController";
const router = Router();
router.get("/", getControllerProduct);
router.post("/add", postController);
export { router as productRouter };
