// Import the server code from server.js
const express = require('express');
const app = require('./server');

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
