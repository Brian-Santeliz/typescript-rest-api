import { Router, Request, Response } from "express";

const router = Router();

router.get(
  "/",
  (req: Request, res: Response): Response<JSON> => {
    return res.json("Hola mundo desde typescript y express!");
  }
);

export default router;
