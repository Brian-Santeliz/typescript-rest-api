import mongoose, { ConnectionOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const uri: string = `mongodb://${process.env.HOST}/${process.env.BD}`;
const options: ConnectionOptions = {
  useUnifiedTopology: true,
  useFindAndModify: true,
  useNewUrlParser: true,
};
export const runDatabase = async (): Promise<void> => {
  try {
    const db = await mongoose.connect(uri, options);
    console.log(`Database is connected ${db.connection.name}`);
  } catch (error) {
    console.error("something was wrong with database", error);
  }
};
