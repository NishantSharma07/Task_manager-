import express from "express";

import {
  completeTask,
  createTask,
  deleteTask,
  getTaskAnalytics,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/analytics", getTaskAnalytics);
router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.patch("/:id/complete", completeTask);
router.delete("/:id", deleteTask);

export default router;
