// src/routes/authRoutes.ts
import express from "express";
import {
  register,
  login as loginController,
} from "../../controllers/auth/auth-controller";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginController);

export default router;
