import express from "express";
import { addTodo, deleteTodo, getAllTodo } from "../controllers/todoController.js";
import authMiddleware from "../middleware/auth.js";

const todoRouter = express.Router();

todoRouter.post("/add",authMiddleware, addTodo);
todoRouter.post("/delete",authMiddleware, deleteTodo);
todoRouter.post("/get",authMiddleware, getAllTodo);

export default todoRouter;
