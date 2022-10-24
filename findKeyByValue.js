const findKeyByValue = function(obj, targeValue) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === targeValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;