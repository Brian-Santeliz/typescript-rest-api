import { ConnectionOptions } from "mongoose";
export const options: ConnectionOptions = {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true,
};
export const uri: string = `mongodb://${process.env.HOST}/${process.env.BD}`;
