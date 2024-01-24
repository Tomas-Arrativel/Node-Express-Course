const express = require('express');
const logger = require('./logger');

const app = express();

// req => middleware => res
app.use('/api', logger); //  Works only for api/products and api/items

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  res.send('Items');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
