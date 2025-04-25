// addTodo
const addTodo = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

// Delete todo
const deleteTodo = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

// get todo for specific user
const getAllTodo = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

export { addTodo, deleteTodo, getAllTodo };
