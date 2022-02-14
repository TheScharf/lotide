const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4]));