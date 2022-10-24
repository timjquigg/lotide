const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Tests
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const tailWords = words.slice(1);
console.log(words, tailWords);
console.log(`Iteratively testing tail function on [${words}].`);
for (let i = 0; i < words.length - 1; i ++) {
  assertEqual(words[i + 1], tail(words)[i]);
}

assertEqual(tail([1]).length, 0);

assertEqual(tail([]).length, 0);