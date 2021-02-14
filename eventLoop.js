const fs = require('fs');

console.log('Start');

setTimeout(() => console.log('setTimeout happened'), 0);

setImmediate(() => console.log('setImmediate happened'));

Promise.resolve().then(() => console.log('Promise 1 happened'));
Promise.resolve().then(() => console.log('Promise 2 happened'));
Promise.resolve().then(() => console.log('Promise 3 happened'));

process.nextTick(() => console.log('nextTick 1 happened'));
process.nextTick(() => console.log('nextTick 2 happened'));
process.nextTick(() => console.log('nextTick 3 happened'));

fs.readFile(__filename, () => {
  console.log('file read');
});

console.log('End');
