import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./utils/db";
import apiRouter from "./routes/index";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Important: Add this to parse JSON body

// Use the apiRouter
app.use(apiRouter);

app.get("/", (req, res) => {
  console.log("Received request");
  try {
    // Your code here
    res.send(
      "This is HomePage if its visiable to you its mean your Server app running fine..."
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default app;
