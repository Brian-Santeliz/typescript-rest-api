import mongoose from "mongoose";
import { options, uri } from "./optionsDatabase";

export const runDatabase = async (): Promise<void> => {
  try {
    const db = await mongoose.connect(uri, options);
    console.log(`Database is connected ${db.connection.name}`);
  } catch (error) {
    console.error("something was wrong with database", error);
  }
};
