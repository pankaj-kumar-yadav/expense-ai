import express from "express";
import cors from "cors";
import authRouter from "./routes/auth-routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.text());

app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send(
        "This is HomePage if its visiable to you its mean your Server app running fine..."
    );
});

app.post("/post", (req, res) => {
    res.send("got it");
});
export default app;