const map = (arr, callback) => {
  newArr = [];
  arr.forEach(element => newArr.push(callback(element)));
  return newArr;
};

module.exports = map;