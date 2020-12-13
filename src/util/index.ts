import Joi from "joi";
import { IProducts } from "../models/Products";
export const validaProduct = (data: IProducts) => {
  const schema = Joi.object({
    name: Joi.string().trim().required().alphanum().min(3).max(30),
    price: Joi.number().required(),
    description: Joi.string().trim().required().alphanum().min(3).max(30),
  });
  return schema.validate(data);
};
