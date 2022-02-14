
const middle = function(array) {
  let midArr = [];
  if (array.length <= 2) {
    return midArr;
  }
  if (array.length % 2 !== 0) {
    midArr = [array[Math.round(array.length / 2) - 1]];
  }
  if (array.length % 2 === 0) {
    midArr = [
      array[Math.round(array.length / 2 - 1)],
      array[Math.round(array.length / 2)],
    ];
  }
  return midArr;
};


module.exports = middle;