const express = require('express');
const morgan = require('morgan');

const app = express();

// req => middleware => res
// app.use([authorize, logger]); //  Works only for api/products and api/items
app.use(morgan('tiny'));

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
