const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(
      'Welcome to our homepageWelcome to our homepageWelcome to our homepage',
    );
  }
  if (req.url === '/about') {
    res.end('I am Tomás Arrativel');
  }

  res.end(`
        <h1>Opss!...</h1>
        <a href="/">Go back home!</a>
        `);
});

server.listen(5000);
