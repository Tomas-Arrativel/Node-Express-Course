const express = require('express');
const app = express();

let { people } = require('./data');

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
