const flatten = function(arr) {
  const newArr = [];
  for (let item of arr) {
    
    if (!Array.isArray(item)) {
      newArr.push(item);
    } else {
      newArr.push(...flatten(item));
    }
  }
  
  return newArr;
};

module.exports = flatten;