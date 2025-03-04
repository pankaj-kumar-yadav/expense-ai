import moduleAlias from "module-alias";
moduleAlias.addAlias(
  "@",
  process.env.NODE_ENV === "production" ? "dist" : "src"
);
import { Request, Response } from "express";
import app from "./app";

const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
