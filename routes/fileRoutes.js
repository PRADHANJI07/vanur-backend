const express = require('express');
const { uploadFile } = require('../controllers/fileController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, admin, uploadFile);

module.exports = router;
