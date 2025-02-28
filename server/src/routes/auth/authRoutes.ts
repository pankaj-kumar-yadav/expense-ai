// src/routes/authRoutes.ts
import express, { Router, Request, Response, NextFunction } from "express";
import {
  register,
  login as loginController,
} from "../../controllers/auth/authController";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginController);

export default router;
