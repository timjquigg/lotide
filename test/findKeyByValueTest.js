const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findkeyByValue', () => {
  it('returns "drama" when searching for "The Wire"', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });
  
  it('returns undefined when searching for "The Wire"', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it('returns "sci_fi" when searching for "The Expanse"', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sciFi');
  });
});