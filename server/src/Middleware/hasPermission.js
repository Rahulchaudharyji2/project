// middlewares/hasPermission.js
const User = require('../models/User');

const hasPermission = async (req, res, next) => {
  const requiredPermission = 'admin'; // or 'moderator', etc.
  const user = await User.findById(req.userId);
  if (!user || !user.roles.includes(requiredPermission)) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};

module.exports = hasPermission;