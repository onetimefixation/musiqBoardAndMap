// https://musiqboardmap-c63a7b9c472d.herokuapp.com/api/apiKey

const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Handle requests for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/apiKey', (req, res) => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not found' });
  }

  res.json({ apiKey });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
