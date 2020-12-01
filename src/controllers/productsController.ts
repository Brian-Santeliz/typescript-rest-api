import { Response, Request, RequestHandler } from "express";
import Product, { IProducts } from "../models/Products";
type productType = IProducts | null;
export const getControllerProduct: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products: productType[] = await Product.find();
    if (products.length <= 0) {
      res.status(204).json("Products stock is empty");
      return;
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getIdControllerProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const response: productType = await Product.findById(id);
    if (!response) {
      res.status(400).json("This product dont exist.");
      return;
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const postControllerProduct: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, description, price } = req.body;
  try {
    const product: productType = new Product({
      name,
      description,
      price,
    });
    const productSaved = await product.save();
    res.status(201).json({ msg: "Product save successfully", productSaved });
  } catch (error) {
    if (error.code === 11000) {
      res.status(500).json("field name is unique.");
      return;
    }
    res.status(500).json(error);
  }
};
export const deleteControllerProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const response: productType = await Product.findByIdAndDelete(id);
    if (!response) {
      res.status(400).json("This product dont exist.");
      return;
    }
    res.status(200).json("Deleted product successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const putControllerProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const updateProduct = {
    ...req.body,
  };
  try {
    const productUpdate: productType = await Product.findByIdAndUpdate(
      id,
      updateProduct,
      {
        new: true,
      }
    );
    if (!productUpdate) {
      res.status(400).json("Product dont exist");
      return;
    }
    res
      .status(201)
      .json({ msg: "Product updated successfully", productUpdate });
  } catch (error) {
    res.status(500).json(error);
  }
};
