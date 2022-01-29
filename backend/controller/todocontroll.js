const { Todo } = require("../module/Todo");

const creaetTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (err) {
    res.json(err);
  }
};

const fetchTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json(err);
  }
};
const fetchTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (err) {
    res.json(err);
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json(todo);
  } catch (err) {
    res.json(err);
  }
};

module.exports = { creaetTodo, fetchTodos, fetchTodo, updateTodo };
