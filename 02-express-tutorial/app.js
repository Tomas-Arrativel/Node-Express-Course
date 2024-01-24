const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.status(200).json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID),
  );

  if (!singleProduct) return res.status(404).send('<h1>Product not found</h1>');

  return res.json(singleProduct);
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
