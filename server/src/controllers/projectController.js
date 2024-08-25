// projectController.js
const Project = require('./../models/projectModel');
const File = require('./../models/fileModel');

const updateProjectWithFiles = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const files = req.files;

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    files.forEach(async (file) => {
      const fileDoc = await File.findById(file.id);
      if (!fileDoc) {
        return res.status(404).json({ message: 'File not found' });
      }
      project.files.push(fileDoc._id);
    });

    await project.save();

    res.status(200).json({ message: 'Project updated with files' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  updateProjectWithFiles
};