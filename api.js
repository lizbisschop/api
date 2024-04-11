// Import Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for GET requests to '/api/hello'
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World! hihihihihihi this is horrible' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});