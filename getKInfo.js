const express = require('express');
const app = express();

// https://musiqboardmap-c63a7b9c472d.herokuapp.com/api/apiKey
// /api/apiKey

app.get('/', (req, res) => {
    res.send('Welcome to the server')
})


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
