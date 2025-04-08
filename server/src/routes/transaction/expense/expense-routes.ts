import express from "express";
import {
  createExpense,
  getExpenses,
} from "../../../controllers/transaction/expense/expense-controller";

const router = express.Router();

router.post("/addExpense", createExpense);
router.get("/expense/:userId", getExpenses);

export default router;
