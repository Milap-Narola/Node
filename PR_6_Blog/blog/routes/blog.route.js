const { Router } = require("express");
const { createBlogs, Upload, bloging, blogView,} = require("../controller/blog.controller");
const blogAuth = require("../middleware/blogAuth");

const blogRouter = Router();

blogRouter.get("/blogs", bloging);
blogRouter.post("/create", blogAuth, Upload.single("image"),blogView);
blogRouter.get("/create", createBlogs);

module.exports = blogRouter;