const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Replace with your desired port number

// Middleware to parse incoming JSON request bodies
app.use(bodyParser.json());

// POST request handler
app.post('/api/data', (req, res) => {
  // incoming request data is in JSON format
  const receivedData = req.body;

  // Process the data as needed
  // For this example, we'll simply log the received data
  console.log('Received JSON data:', receivedData);

  // Send a response back to the client
  res.json({ message: 'data received successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
