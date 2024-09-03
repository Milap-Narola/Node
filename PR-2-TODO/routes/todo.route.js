const express = require("express");
const router = express.Router();
const { getAllTodos, addTodo, updateTodo, deleteTodo, getTodoById, findByStatus, } = require("../controllers/todo.controller");

router.get("/", getAllTodos);
router.post("/add", addTodo);
router.patch("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);
router.get("/:id", getTodoById);
router.get("/findbystatus", findByStatus);

module.exports = router;