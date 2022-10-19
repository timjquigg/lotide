const assertEqual = function(actual, expected) {
  console.log(
    actual === expected ?
      `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
      `❌❌❌ Assertion Failed: ${actual} !=== ${expected}`
  );
};

const countLetters = function(str) {
  const result = {};
  for (let char of str) {
    if (/\w/.test(char)) {
      result[char] ? result[char] ++ : result[char] = 1;
    }
  }

  return result;
};

// Tests
const lighthouseObj = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const result1 = countLetters('lighthouse in the house');

for (let key in result1) {
  console.log(key);
  assertEqual(result1[key], lighthouseObj[key]);
}