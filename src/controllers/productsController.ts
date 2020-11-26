import { Response, Request, RequestHandler } from "express";
import Product from "../models/Products";
export const getControllerProduct: RequestHandler = (
  req: Request,
  res: Response
) => {
  res.json("Works!");
};

export const postController: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, description, price } = req.body;
  try {
    const product = new Product({
      name,
      description,
      price,
    });
    await product.save();
    res.status(201).json({ msg: "Product save successfully", product });
  } catch (error) {
    res.status(500).json(error);
  }
};
