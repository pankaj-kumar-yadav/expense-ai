import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "@/utils/db";


dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// app.use("/api/users", userRoutes);
// app.use("/api/expenses", expenseRoutes);

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
