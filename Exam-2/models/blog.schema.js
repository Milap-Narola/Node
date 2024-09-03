

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    userId: String
})

const blog = mongoose.model('blog', blogSchema)

module.exports = blog
