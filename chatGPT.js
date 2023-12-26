const express = require('express');
const router = express.Router();
const axios = require('axios');

// Import OpenAI's GPT-3 API
const { OpenAIAPI } = require('openai');

// Initialize OpenAI API with your API key
const openai = new OpenAIAPI(process.env.OPENAI_API_KEY);

// Route to handle chat requests
router.post('/', async (req, res) => {
    try {
        const { message } = req.body;

        // Send the message to the GPT-3 model and get the response
        const gptResponse = await openai.complete({
            engine: 'text-davinci-002',
            prompt: message,
            max_tokens: 150,
        });

        // Extract the generated message from the GPT-3 response
        const gptMessage = gptResponse.data.choices[0].text.trim();

        // Send the GPT-3 message as the response
        res.json({ message: gptMessage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

module.exports = router;
