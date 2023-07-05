const express = require('express');
const app = express();

app.get('https://musiqboardmap-c63a7b9c472d.herokuapp.com/api/apiKey', (req, res) => {
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
