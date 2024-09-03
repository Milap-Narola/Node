const { Router } = require("express")
const { getTask, findById, createTask, updateTask, deleteTask, findTaskByUserId } = require("../controller/task.controller")

const taskRouter = Router()

taskRouter.get("/", getTask)
taskRouter.get("/:id", findById)
taskRouter.post("/", createTask)
taskRouter.patch("/:id", updateTask)
taskRouter.delete("/:id", deleteTask)
taskRouter.get("/user/:userId",findTaskByUserId)

module.exports = taskRouter
