import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/octofit_db";

export const connectDatabase = async (): Promise<typeof mongoose> => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(MONGO_URI);
};

export default connectDatabase;
