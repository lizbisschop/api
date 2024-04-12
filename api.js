// Import Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for GET requests to '/api/hello'
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World! dit is pogin twee om te pullen en te starten hihi' });
});

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});