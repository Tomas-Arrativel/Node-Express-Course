// GLOBALS

// __dirname  - Path to current directory
// __filename - File name
// require    - Function tu use modules (CommonJS)
// module     - Info about current module (file)
// process    - Info about env where program is executed
console.log(__dirname);

setInterval(() => {
  console.log('Hello world');
}, 1000);
