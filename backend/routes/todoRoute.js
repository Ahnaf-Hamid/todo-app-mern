import express from "express";
import { addTodo, deleteTodo, getAllTodo } from "../controllers/todoController.js";

const todoRouter = express.Router();

todoRouter.post("/add", addTodo);
todoRouter.post("/delete", deleteTodo);
todoRouter.post("/get", getAllTodo);

export default todoRouter;
