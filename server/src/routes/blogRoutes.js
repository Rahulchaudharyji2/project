const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ errMsg: 'Error fetching blogs' });
  }
});

router.post('/blogs', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ errMsg: 'Error creating blog' });
  }
});

// Add more routes as needed

module.exports = router;