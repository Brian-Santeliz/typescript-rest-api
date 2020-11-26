import { Schema, model, Document } from "mongoose";
export interface IProducts extends Document {
  name: string;
  description: string;
  price: string;
}
const productsSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);
export default model<IProducts>("Products", productsSchema);
