const express = require('express');
const { createProject } = require('../controllers/projectController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, admin, createProject);

module.exports = router;
