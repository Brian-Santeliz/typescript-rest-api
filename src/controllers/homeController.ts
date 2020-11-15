import { Response, Request } from "express";
export const getController = (req: Request, res: Response): Response<JSON> => {
  return res.json("Hola mundo desde typescript y express!");
};
