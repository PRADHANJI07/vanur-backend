const asyncHandler = require('express-async-handler');
const File = require('../models/fileModel');

// @desc    Upload a file
// @route   POST /api/files
// @access  Private/Admin
const uploadFile = asyncHandler(async (req, res) => {
  const { project, fileName, filePath, fileType } = req.body;

  const file = new File({
    project,
    fileName,
    filePath,
    fileType,
  });

  const uploadedFile = await file.save();
  res.status(201).json(uploadedFile);
});

module.exports = { uploadFile };
