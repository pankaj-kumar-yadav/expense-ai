// import "module-alias/register";
import express, { Request, Response } from "express";
import app from "./app";

const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
