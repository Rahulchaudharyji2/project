const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  roles: [{ type: String }],
  permissions: [{ type: String }],
  username: { type: String, required: true, unique: true }
});

userSchema.index({ username: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

module.exports = User;