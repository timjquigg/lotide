const countLetters = function(str) {
  const result = {};
  for (let char of str) {
    if (/\w/.test(char)) {
      result[char] ? result[char] ++ : result[char] = 1;
    }
  }
  return result;
};



module.exports = countLetters;