import "module-alias/register";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "@/utils/db";
import authRoutes from "@/routes/auth/authRoutes";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Important: Add this to parse JSON body

// Routes
// app.use("/api/users", userRoutes);
// app.use("/api/expenses", expenseRoutes);

// Auth routes
app.use("/api/auth", authRoutes);

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
