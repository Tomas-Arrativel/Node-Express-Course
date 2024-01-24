const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
  res.json(products);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
