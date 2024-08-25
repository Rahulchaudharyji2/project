const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { BadRequestError, AuthenticationError } = require('../core/ApiError');
const catchAsync = require('../core/catchAsync');
const { isLoggedIn } = require('../Middleware/authMiddleware');

// Use an environment variable for the JWT secret key
const jwtSecretKey = process.env.JWT_SECRET;

router.post('/register', catchAsync(async (req, res) => {
  try {
    const { username, email, password, name } = req.body;

    // Check if user with the given username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      throw new BadRequestError('Username or Email already exists');
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the user in the database
    const user = new User({
      username,
      email,
      password: hashedPassword,
      name,
      roles: ['user'], // Assign default role as 'user'
    });

    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Internal Server Error' });
  }
}));

router.post('/login', catchAsync(async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username and include the password field
    const user = await User.findOne({ username }).select('+password');
    if (!user) {
      throw new AuthenticationError("Invalid username or password");
    }

    // Compare the provided password with the stored hashed password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new AuthenticationError('Invalid username or password');
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, roles: user.roles }, jwtSecretKey, { expiresIn: '1h' });

    // Setting a secure cookie with the token
    res.cookie('token', token, {
      httpOnly: true,  // For security, prevent JavaScript from accessing the cookie
      maxAge: 7 * 24 * 60 * 60 * 1000,  // 1 week
      withCredentials: true,
    });

    res.status(200).json({ message: "Logged in successfully", token });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Internal Server Error' });
  }
}));

router.post('/logout', isLoggedIn, catchAsync(async (req, res) => {
  try {
    // Clear the token cookie
    res.cookie('token', "", { httpOnly: true, maxAge: 0, withCredentials: true });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Internal Server Error' });
  }
}));

module.exports = router;
