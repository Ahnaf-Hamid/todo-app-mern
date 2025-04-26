import todoModel from "../model/todoModel.js";

// addTodo
const addTodo = async (req, res) => {
  try {
    const { todo } = req.body;

    await todoModel.create({ todo });

    res.json({ success: true, msg: "Todo Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

// Delete todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;

    await todoModel.findByIdAndDelete(id);

    res.json({ success: true, msg: "Todo Deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

// get todo for specific user
const getAllTodo = async (req, res) => {
  try {
    const { userId } = req.body;

    const todos = await todoModel.find({ userId });

    res.json({ success: true, todos });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

export { addTodo, deleteTodo, getAllTodo };
