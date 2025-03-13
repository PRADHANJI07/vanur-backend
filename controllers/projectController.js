const asyncHandler = require('express-async-handler');
const Project = require('../models/projectModel');

// @desc    Create a new project
// @route   POST /api/projects
// @access  Private/Admin
const createProject = asyncHandler(async (req, res) => {
  const { customer, name, description, status, progressDetails } = req.body;

  const project = new Project({
    customer,
    name,
    description,
    status,
    progressDetails,
  });

  const createdProject = await project.save();
  res.status(201).json(createdProject);
});

module.exports = { createProject };
