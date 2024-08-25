const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  // Add more fields as needed
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;