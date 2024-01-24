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

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  res.send('Hello world');
});

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1)
    // We cant send 2 responses per request
    // res.status(200).send('No product matched your search');
    return res.status(200).send('No product matched your search');

  res.status(200).json(sortedProducts);
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
