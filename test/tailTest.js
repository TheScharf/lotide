const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail([1, 2, 3] === [1, 2, 3])); // => false
assertEqual(tail([1, 2, 3] == [1, 2, 3])); // => false