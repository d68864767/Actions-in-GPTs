```javascript
const express = require('express');
const router = express.Router();

// Middleware to check for API key in headers
router.use((req, res, next) => {
    const apiKey = req.get('X-API-Key');

    if (!apiKey) {
        return res.status(401).json({ error: 'Missing API key.' });
    }

    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({ error: 'Invalid API key.' });
    }

    next();
});

module.exports = router;
```
