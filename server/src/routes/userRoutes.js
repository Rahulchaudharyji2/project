const express = require('express');
const catchAsync = require('../core/catchAsync');
const router = express.Router();
const User = require('../models/User');
const isLoggedIn = require('../Middleware/isLoggedIn');
const hasPermission = require('../Middleware/hasPermission');

const getProfile = async (req, res) => {
  const { userId } = req;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({
    username: user.username,
    email: user.email,
    userId: user._id
  })
};

const getProtected = (req, res) => {
  res.json({ message: 'Hello, authenticated user!' });
};

const getAdminOnly = (req, res) => {
  res.json({ message: 'Hello, admin!' });
};

router.get('/profile', isLoggedIn, catchAsync(getProfile));
router.get('/protected', isLoggedIn, catchAsync(getProtected));
router.get('/admin-only', isLoggedIn, hasPermission, catchAsync(getAdminOnly));

module.exports = router;