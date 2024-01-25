const express = require('express');
const app = express();

let { people } = require('./data');

//  Static folder
app.use(express.static('./methods-public'));
//  Parse Form Data
app.use(express.urlencoded({ extended: false }));

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) return res.status(200).send(`<h1>Welcome ${name}</h1>`);

  res.status(401).send('<h1>You need to provide your information</h1>');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
