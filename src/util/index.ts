import Joi from "joi";
import { IProducts } from "../models/Products";
import { IUser } from "../models/Users";
export const validateProduct = (data: IProducts) => {
  const schema = Joi.object({
    name: Joi.string().trim().required().alphanum().min(3).max(30),
    price: Joi.number().required(),
    description: Joi.string().trim().required().alphanum().min(3).max(30),
  });
  return schema.validate(data);
};
export const validateUser = (data: IUser) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .trim()
      .required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return schema.validate(data);
};
