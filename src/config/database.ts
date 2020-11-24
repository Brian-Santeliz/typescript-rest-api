import mongoose, { ConnectionOptions } from "mongoose";

const uri: string = "127.0.0.1/typescript-api";
const options: ConnectionOptions = {
  useUnifiedTopology: true,
  useFindAndModify: true,
  useNewUrlParser: true,
};
mongoose.connect(uri, options);
