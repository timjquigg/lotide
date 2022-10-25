const assert = require('chai').assert;
const findKey = require('../findKey');

const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe('#findKey', () => {
  it('returns "Akaleri" when given "x => x.stars === 3"', () => {
    assert.equal(findKey(testObject, x => x.stars === 3), 'Akaleri');
  });

  it('returns "noma" when given "x => x.stars === 2"', () => {
    assert.equal(findKey(testObject, x => x.stars === 2), 'noma');
  });
});