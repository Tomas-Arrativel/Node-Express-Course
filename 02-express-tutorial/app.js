const http = require('http');

const server = http.createServer((req, res) => {
  console.log('User hit the server');
  res.end('<h1>Home page</h1>');
});

server.listen(5000);
