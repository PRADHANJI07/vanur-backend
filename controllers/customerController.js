const asyncHandler = require('express-async-handler');
const Customer = require('../models/customerModel');

// @desc    Add new customer
// @route   POST /api/customers
// @access  Private/Admin
const addCustomer = asyncHandler(async (req, res) => {
  const { name, address, squareFeet, contactNumber, email, siteLocation, buildingType } = req.body;

  const customer = new Customer({
    name,
    address,
    squareFeet,
    contactNumber,
    email,
    siteLocation,
    buildingType,
  });

  const createdCustomer = await customer.save();
  res.status(201).json(createdCustomer);
});

module.exports = { addCustomer };
