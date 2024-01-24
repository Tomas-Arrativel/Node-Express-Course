const express = require('express');
const path = require('path');

const app = express();

// It is used normally with the public folder
// Static folders are files that server doesn't has to change
app.use(express.static('./navbar-app'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + './navbar-app/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('Resource not found');
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
