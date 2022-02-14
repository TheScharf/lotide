// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i <= arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};



module.exports = tail;