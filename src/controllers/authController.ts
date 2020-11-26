import { RequestHandler, Request, Response, response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/Users";
dotenv.config();
interface IPayload {
  id?: string;
}
export const postSignInController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { email, username, password } = req.body;
  if (!email.trim() || !username.trim() || !password.trim()) {
    res.status(400).json("All fields is required");
    return;
  }
  try {
    const user = new User({
      email,
      username,
      password,
    });
    user.password = await user.hashPassword(password);
    /* Investigar como no devolver el passwors */
    const newUser = await user.save();
    const payload: IPayload = {
      id: newUser.id,
    };
    const jwtSign = jwt.sign(payload, process.env.SECRET || "secret", {
      expiresIn: "1h",
    });
    res.header("token", jwtSign).status(201).json({ msg: "User create" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSignInController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
