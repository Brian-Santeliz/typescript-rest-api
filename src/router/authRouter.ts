import { Router } from "express";
import * as controller from "../controllers/authController";

const router = Router();
router.post("/signin", controller.postSignInController);
router.get("/signin", controller.getSignInController);
router.post("/signup");
export default router;
