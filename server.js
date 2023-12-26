// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chatGPT = require('./chatGPT');
const actions = require('./actions');
const plugins = require('./plugins');
const openAPI = require('./openAPI');
const auth = require('./auth');

// Initialize express app
const app = express();

// Use necessary middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Use imported modules as middleware
app.use('/chatGPT', chatGPT);
app.use('/actions', actions);
app.use('/plugins', plugins);
app.use('/openAPI', openAPI);
app.use('/auth', auth);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
