const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('returns true when comparing { a: "1", b: "2" } & { b: "2", a: "1" }', () => {
    assert.equal(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
  
  it('returns false when comparing { a: "1", b: "2" } & { a: "1", b: "2", c: "3" }', () => {
    assert.equal(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
  });
  
  it('returns true when comparing { c: "1", d: ["2", 3] } & { d: ["2", 3], c: "1" }', () => {
    assert.equal(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });
  
  it('returns false when comparing { c: "1", d: ["2", 3] } & { c: "1", d: ["2", 3, 4] }', () => {
    assert.equal(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });

  it('returns true when comparing { a: "1", b: "2" } & { b: "2", a: "1" }', () => {
    assert.equal(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
  
  it('returns true when comparing { a: { z: 1 }, b: 2 } & { a: { z: 1 }, b: 2 }', () => {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  
  it('returns true when comparing { a: { y: 0, z: 1 }, b: 2 } & { a: { z: 1 }, b: 2 }', () => {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it('returns true when comparing { a: { y: 0, z: 1 }, b: 2 } & { a: 1, b: 2 }', () => {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});