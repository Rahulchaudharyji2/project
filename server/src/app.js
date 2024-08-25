const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const userProject = require('./routes/userProject');
const blogRoutes = require('./routes/blogRoutes');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors
app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true,
}));

app.get('/echo', (req, res) => {
  res.send('received echo');
});

app.use(authRoutes);
app.use(userRoutes);
app.use(blogRoutes);
// app.use(userProject);

app.use((err, req, res, next) => {
  const { status = 500, message = 'Internal server error' } = err;
  res.status(status).json({ errMsg: message });
});

module.exports = app;