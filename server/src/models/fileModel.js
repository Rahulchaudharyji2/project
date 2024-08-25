const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: String,
  type: String,
  size: Number,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;