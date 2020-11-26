import mongoose, { ConnectionOptions } from "mongoose";

const uri: string = "mongodb://127.0.0.1/typescript-api";
const options: ConnectionOptions = {
  useUnifiedTopology: true,
  useFindAndModify: true,
  useNewUrlParser: true,
};
export const runDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(uri, options);
    console.log("Database is connected");
  } catch (error) {
    console.error("something was wrong with database", error);
  }
};
