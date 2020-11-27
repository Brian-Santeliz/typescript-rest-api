import { RequestHandler, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/Users";
dotenv.config();
interface IPayload {
  id?: string;
}

export const getSignInController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await User.find().select({ password: 0 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

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
    const newUser = await user.save();
    const payload: IPayload = {
      id: newUser.id,
    };
    const jwtSign = jwt.sign(payload, process.env.SECRET || "secret", {
      expiresIn: "1h",
    });
    res.header("token", jwtSign).status(201).json({ msg: "User createted" });
  } catch (error) {
    res.status(500).json(error);
  }
};
export const postSignUpController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json("All fields is required");
  try {
    const userFind = await User.findOne({ email });
    if (!userFind) {
      res.status(400).json("This user don't exist");
      return;
    }
    if (!(await userFind.comparePassword(password))) {
      res.status(400).json("Password not match");
      return;
    }
    const payload: IPayload = {
      id: userFind.id,
    };
    const token = jwt.sign(payload, process.env.SECRET || "secret", {
      expiresIn: "1h",
    });
    res.header("token", token).json(`Welcome ${userFind.username}`);
  } catch (error) {
    res.status(500).json(error);
  }
};
