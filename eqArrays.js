const assertEqual = require('./assertEqual');
// const arr1 = [];
// const arr2 = [];

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  
    if (arr1 === arr2) {
      return true;
    }
  }

};

module.exports = eqArrays;