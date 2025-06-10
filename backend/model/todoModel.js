import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  todo: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

const todoModel = mongoose.models.todo || mongoose.model("todo", todoSchema);

export default todoModel;
