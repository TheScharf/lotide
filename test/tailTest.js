// const assertEqual = require('../assertEqual');
//const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
// assertEqual(tail([1, 2, 3] === [1, 2, 3])); // => false
// assertEqual(tail([1, 2, 3] == [1, 2, 3])); // => false

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns '[2, 3]' for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns '[3, 4, 5]' for [2, 3, 4, 5]",  () => {
    assert.deepEqual(tail([2, 3, 4, 5]), [3, 4, 5]);
  });
});