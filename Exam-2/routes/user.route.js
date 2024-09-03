
const { Router } = require("express")
const { createUser, LoggedIn } = require("../controller/user.controller")

const userRouter = Router()
userRouter.post("/signup",createUser)
userRouter.post("/login",LoggedIn)

module.exports =userRouter
