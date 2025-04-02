// Backend server (e.g., server.js)
const express = require('express');
const cors = require('cors'); // Optional, for your frontend to access your backend
const axios = require('axios');

const app = express();
app.use(cors()); // Enable CORS for your frontend

app.get('/jiosaavn-data', async (req, res) => {
    try {
        const jiosaavnResponse = await axios.get('https://www.jiosaavn.com/api.php?__call=webapi.getLaunchData&api_version=4&_format=json&_marker=0&ctx=web6dot0');
        res.json(jiosaavnResponse.data);
    } catch (error) {
        console.error('Error fetching from JioSaavn:', error);
        res.status(500).json({ error: 'Failed to fetch data from JioSaavn' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});