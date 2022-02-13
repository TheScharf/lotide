const arr1 = [];
const arr2 = [];

const eqArrays = function(arr1, arr2) {
  if (!(Array.isArray(arr1) || !(Array.isArray(arr2)))) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    if (arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('The arrays are equal!');
  } else {
    console.log('The arrays are not equal.');
  }
};



const without = function(arr1, arr2) {
  for (let num1 = 0; num1 < arr1.length; num1++) {
    for (let num2 = 0; num2 < arr2.length; num2++) {
      if (arr1[num1] === arr2[num2]) {
        arr1.splice(num1, 1);
      }
    }
  }
//console.log(arr1);
return arr1;
}

without([1, 2, 3], [1]);
without(['1', '2', '3'], [1, 2, '3']);

/*
const without = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let newArr = [];
    if (arr1[i] === arr2[i]) {
      newArr = arr2.splice(i, arr1[i])
    }
    console.log(newArr);
  }
};
*/