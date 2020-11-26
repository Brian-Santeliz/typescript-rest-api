import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";
interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  hashPassword: (password: string) => Promise<string>;
}
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

userSchema.methods.hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
export default model<IUser>("Users", userSchema);
