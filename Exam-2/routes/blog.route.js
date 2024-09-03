const { Router } = require("express")
const { createBlog, getBlog,findById, deleteBlog, updateBlog, findBlogByUserId } = require("../controller/blog.controller")
const blogRoute = Router()

blogRoute.get("/",getBlog)
blogRoute.get("/",findById)
blogRoute.post("/", createBlog)
blogRoute.patch("/:id",updateBlog)
blogRoute.delete("/:id", deleteBlog)
blogRoute.get("/user/:userId",findBlogByUserId)

module.exports = blogRoute