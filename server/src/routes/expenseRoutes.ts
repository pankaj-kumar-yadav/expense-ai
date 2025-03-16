import express from "express";
import { createExpense, getExpenses } from "../controllers/expenseController";

const router = express.Router();

router.post("/", createExpense);
router.get("/:userId", getExpenses);

export default router;
