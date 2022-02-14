// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let newArr = arr.toString().slice(1);
  return newArr;
};



module.exports = tail;