const express = require('express');
const app = express();

// req => middleware => res
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);
  next();
};

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
