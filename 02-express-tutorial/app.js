const express = require('express');
const app = express();

const logger = require('./logger');

// req => middleware => res

app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
