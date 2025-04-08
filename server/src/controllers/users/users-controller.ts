import { Request, Response } from "express";
import User from "../../models/user/user-model";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password").exec();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};
