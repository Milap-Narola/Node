const { initialTodos } = require("../models/todo.schema");

const getAllTodos = (req, res) => {
  res.send(initialTodos);
};

const addTodo = (req, res) => {
  const { title, isCompleted } = req.body;
  const todo = {
    title,
    isCompleted,
    id: initialTodos.length ? initialTodos[initialTodos.length - 1].id + 1 : 1,
  };
  initialTodos.push(todo);
  res.send(todo);
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, isCompleted } = req.body;
  const todo = initialTodos.find((e) => e.id == id);
  if (todo) {
    if (title != null) todo.title = title;
    if (isCompleted != null) todo.isCompleted = isCompleted;
    res.send(todo);
  } else {
    res.status(404).send("Todo not found");
  }
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  const deletedTodo = initialTodos.find((e) => e.id == id);
  initialTodos = initialTodos.filter((e) => e.id != id);
  res.send({ deletedTodo, initialTodos });
};

const getTodoById = (req, res) => {
  const { id } = req.params;
  const todo = initialTodos.find((e) => e.id == id);
  if (todo) {
    res.send(todo);
  } else {
    res.status(404).send("Todo Not Found !!!");
  }
};

const findByStatus = (req, res) => {
  const { isCompleted } = req.query;
  const todos = initialTodos.filter((e) => e.isCompleted.toString() === isCompleted);
  res.send(todos);
};

module.exports = {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
  findByStatus,
};