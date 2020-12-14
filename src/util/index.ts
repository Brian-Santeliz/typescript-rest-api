import Joi from "joi";
import { IProducts } from "../models/Products";
import { IUser } from "../models/Users";
export const validateProduct = (data: IProducts) => {
  const schema = Joi.object({
    name: Joi.string().trim().required().min(3).max(30),
    price: Joi.number().required(),
    description: Joi.string().trim().required().alphanum().min(3).max(30),
  });
  return schema.validate(data);
};
export const validateUserSignIn = (data: IUser) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .trim()
      .required(),
    username: Joi.string().trim().alphanum().min(3).max(30).required(),
    password: Joi.string()
      .trim()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(5)
      .max(10),
  });
  return schema.validate(data);
};

export const validateUserSignUp = (data: IUser) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .trim()
      .required(),
    password: Joi.string().trim().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return schema.validate(data);
};
