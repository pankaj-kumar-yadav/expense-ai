import mongoose from "mongoose";
import dotenv from "dotenv";
import { ConnectOptions } from "mongodb";

dotenv.config();

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI environment variable is not defined');
    }

    const mongoUri: string = process.env.MONGO_URI;

    const options: ConnectOptions = {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    } as ConnectOptions;

    await mongoose.connect(mongoUri, options);

    console.log('MongoDB successfully connected');
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    // Log more details about authentication errors
    if (err instanceof Error) {
      console.error("Error details:", err.message);
    }
    process.exit(1);
  }
};
