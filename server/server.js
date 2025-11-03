// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the Express app
const app = express();
const port = 5000;

// --- Middleware ---
// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
// Parse incoming JSON requests
app.use(bodyParser.json());

// --- MongoDB Connection ---
// Replace 'your_mongodb_connection_string' with your actual MongoDB connection string.
// For a local database, it might be: 'mongodb://localhost:27017/enquiryDB'
const dbURI = 'mongodb+srv://user:12345@cluster0.p7ghsjc.mongodb.net/';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Successfully connected to MongoDB');
}).catch(err => {
  console.error('Database connection error:', err);
  process.exit(1); // Exit the process with an error code
});

// --- Link API Routes ---
// This is the key part for separating your routes.
// Any request starting with '/api/enquiries' will be handled by the 'enquiries' router.
app.use('/api/enquiries', require('./routes/api/enquiries'));

// --- Start the Server ---
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});