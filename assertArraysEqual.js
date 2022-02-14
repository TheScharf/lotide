const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log('✅✅✅ The arrays are equal!');
  } else {
    console.log('🛑🛑🛑 The arrays are not equal.');
  }
};



module.exports = assertArraysEqual;