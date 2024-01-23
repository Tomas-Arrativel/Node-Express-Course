const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.status(200).send('<h1>About page</h1>');
});

app.all('*', (req, res) => {
  res.status(404).send('<h3>Not found</h3>');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
// app.get
// app.put
// app.post
// app.delete
// app.all
// app.use
// app.listen
