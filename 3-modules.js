// Modules
const names = require('./4-names');
const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor');

sayHi('Tomás');
sayHi(names.john);
sayHi(names.peter);

console.log(data);
