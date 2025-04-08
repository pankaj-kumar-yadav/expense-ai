import express from "express";
import authRoutes from "./auth/auth-routes";
import usersRoutes from "./users/users-routes";
import expenseRoutes from "./transaction/expense/expense-routes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/expenses", expenseRoutes);

// Create a base route for /api
const apiRouter = express.Router();
apiRouter.use("/api", router);

export default apiRouter;