import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;


app.listen(PORT, async () => {
    try {
        await connection;
    } catch {
        console.log("there error in connecting to mongodb");
    }
    console.log(`started at ${PORT}`);
});