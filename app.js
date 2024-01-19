const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`Data recieved by ${name} with an id of ${id}`);
});

customEmitter.on('response', () => {
  console.log(`Other logic here...`);
});

customEmitter.emit('response', 'John', 34);
