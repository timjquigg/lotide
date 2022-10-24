const takeUntil = function(array, callback) {
  const newArr = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    newArr.push(item);
  }
  return newArr;
};

module.exports = takeUntil;