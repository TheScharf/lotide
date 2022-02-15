const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(characters) {
  let lettersCounted = {};
  for (const individual of characters) {
    if (lettersCounted.hasOwnProperty(individual)) {
      lettersCounted[individual] = lettersCounted[individual] + 1;
    } else {
      lettersCounted[individual] = 1;
    }
    if (characters === " ") {
      delete lettersCounted[individual];
    }
  }
  return lettersCounted;
};

console.log(countLetters("Lighthouse in the house"));

module.exports = countLetters;