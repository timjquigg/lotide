const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (/\w/.test(char)) {
      results[char] ? results[char].push(i) : results[char] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;