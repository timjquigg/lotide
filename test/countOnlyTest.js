const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const filter = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

describe('#countOnly', () => {
  it('returns 1 for "Jason"', () => {
    assert.equal(countOnly(firstNames, filter)["Jason"], 1);
  });

  it('returns undefined for "Karima"', () => {
    assert.equal(countOnly(firstNames, filter)["Karima"], undefined);
  });

  it('returns 2 for "Fang"', () => {
    assert.equal(countOnly(firstNames, filter)['Fang'], 2);
  });

  it('returns undefined for "Agouhanna"', () => {
    assert.equal(countOnly(firstNames, filter)["Agouhanna"], undefined);
  });

  it('returns {Jason: 1, Fang: 2}', () => {
    assert.deepEqual(countOnly(firstNames, filter), {"Jason": 1, "Fang": 2});
  });

});