import moduleAlias from "module-alias";
const aliasPath = process.env.NODE_ENV === "production" ? "dist" : "src";
moduleAlias.addAlias("@", aliasPath);
import { Request, Response } from "express";
import app from "./app";

const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// "dev": "ts-node-dev --respawn --transpile-only --experimental-specifier-resolution=node src/index.ts"
