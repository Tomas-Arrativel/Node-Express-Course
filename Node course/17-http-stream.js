var http = require('http');
var fs = require('fs');

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/result-sync.txt', "utf8");
    // res.end(text);
    const fileStream = fs.createReadStream('./content/result-sync.txt', 'utf8');
    fileStream.on('open', () => fileStream.pipe(res));
    fileStream.on('error', (err) => res.end(err));
  })
  .listen(5000);
