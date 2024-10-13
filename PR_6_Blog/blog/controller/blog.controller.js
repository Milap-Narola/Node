const Blog = require("../models/blog.schema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Upload = multer({ storage: storage });

const blogView= (req, res) => {
  res.render("blogView");
};

const createBlogs = async (req, res) => {
  let { title, content, author, category, likedBy, comments, image } = req.body;
  let { id } = req.cookies;
  let user = await findById(id);
  if (req.file) {
    image = req.file.path;
  }
  let blog = { title, content, author, category, likedBy, comments, image };
  let data = await Blog.create(blog);
  res.cookie("blogId", data.id).send(`blog created by ${user.username}`);
};

const bloging = async (req, res) => {
  let data = await Blog.find();
  res.send(data);
};

module.exports = { blogView, createBlogs, Upload, bloging };