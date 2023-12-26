const express = require('express');
const router = express.Router();
const axios = require('axios');

// Import OpenAPI specification
const openAPI = require('./openAPI');

// Route to handle action requests
router.post('/:action', async (req, res) => {
    try {
        const { action } = req.params;
        const { data } = req.body;

        // Find the corresponding action in the OpenAPI specification
        const actionSpec = openAPI.paths[`/${action}`];

        if (!actionSpec) {
            return res.status(404).json({ error: 'Action not found.' });
        }

        // Determine the HTTP method to use
        const method = actionSpec.get ? 'get' : 'post';

        // Determine the URL to call
        const url = `${process.env.API_BASE_URL}/${action}`;

        // Call the API
        const apiResponse = await axios[method](url, data);

        // Send the API response as the response
        res.json(apiResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

module.exports = router;
