const express = require("express");
const {
  creaetTodo,
  fetchTodos,
  fetchTodo,
  updateTodo,
} = require("../controller/todocontroll");
const route = express.Router();

route.post("/todos", creaetTodo);
route.get("/todos", fetchTodos);
route.get("/todos/:id", fetchTodo);
route.get("/todos:/id", updateTodo);
module.exports = { route };
