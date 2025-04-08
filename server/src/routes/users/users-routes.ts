import express from "express";
import { getUsers } from "../../controllers/users/users-controller";

const router = express.Router();

router.get("/usersList", getUsers);

export default router;
