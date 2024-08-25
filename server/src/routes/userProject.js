const bcrypt = require('bcrypt');
const User = require('../models/User');
const { BadRequestError } = require('../core/ApiError');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { username, password, email, project } = req.body;

  // checking if user with given username already exists
  const isUserAlreadExist = await User.findOne({ username });
  if (isUserAlreadExist) {
    throw new BadRequestError('User with username already exists');
  }

  // Hash the password
  const passwordHash = await bcrypt.hash(password, 12);

  // Determine the role based on whether a project is being uploaded
  let role;
  if (project) {
    role = 'admin';
  } else {
    role = 'member';
  }

  // Create user in database.
  const user = await User.create({ username, password: passwordHash, email, role });

  res.status(201).json({ message: 'User created successfully' });
};

// user
router.post('/register', registerUser);

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });
  res.json({ token });
});

module.exports = {
  registerUser
};