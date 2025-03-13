const express = require('express');
const { addCustomer } = require('../controllers/customerController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, admin, addCustomer);

module.exports = router;
