// Import Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for GET requests to '/api/hello'
app.get('/hello_world', (req, res) => {
    res.json({ "result": 'hello world testing again' });
});

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
});