import { Router } from "express";
import * as controller from "../controllers/authController";

const router = Router();
router.post("/signin", controller.signInController);
router.post("/signup");
export default router;
