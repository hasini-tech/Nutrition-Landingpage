// routes/api/enquiries.js

const express = require('express');
const router = express.Router();

// Import the Enquiry model
const Enquiry = require('../../models/Enquiry');

// @route   POST api/enquiries
// @desc    Create a new enquiry entry
// @access  Public
router.post('/', async (req, res) => {
  try {
    // Create a new instance of the Enquiry model with the data from the request body
    const newEnquiry = new Enquiry(req.body);

    // Save the new enquiry to the database
    await newEnquiry.save();

    // Send a success response
    res.status(201).json({ message: 'Enquiry saved successfully!' });
  } catch (error) {
    // If an error occurs, log it and send a server error response
    console.error('Error saving enquiry:', error);
    res.status(500).json({ message: 'Failed to save enquiry. Please try again.' });
  }
});

module.exports = router;