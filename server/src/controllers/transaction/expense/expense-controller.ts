import { Request, Response } from "express";
import { Expense } from "../../../models/expense/expense-model";

export const createExpense = async (req: Request, res: Response) => {
  try {
    const { userId, title, amount, category, date } = req.body;
    const expense = new Expense({ userId, title, amount, category, date });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: "Failed to create expense" });
  }
};

export const getExpenses = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const expenses = await Expense.find({ userId });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
};
