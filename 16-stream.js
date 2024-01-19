const { createReadStream } = require('fs');

const stream = createReadStream('./content/result-sync.txt');

stream.on('data', (result) => {
  console.log(result.length);
});

stream.on('error', (err) => console.log(err));
