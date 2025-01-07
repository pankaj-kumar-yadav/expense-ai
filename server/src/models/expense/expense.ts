import mongoose, { Schema, Document } from "mongoose";

export interface IExpense extends Document {
  userId: string;
  title: string;
  amount: number;
  category: string;
  date: Date;
}

const expenseSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Expense = mongoose.model<IExpense>("Expense", expenseSchema);
