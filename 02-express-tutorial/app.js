const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json([{ name: 'John' }, { name: 'Tomas' }]);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
