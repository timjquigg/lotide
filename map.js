const map = (arr, callback) => {
  const newArr = [];
  arr.forEach(element => newArr.push(callback(element)));
  return newArr;
};

module.exports = map;