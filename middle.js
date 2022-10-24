const middle = function(arr) {
  const mid = [];
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length > 2 && arr.length % 2 === 1) {
    mid.push(arr[middleIndex]);
  } else if (arr.length > 2 && arr.length % 2 === 0) {
    mid.push(...arr.slice(middleIndex - 1, middleIndex + 1));
  }
  return mid;
};

module.exports = middle;