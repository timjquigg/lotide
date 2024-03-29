const assert = require("chai").assert;
const { head } = require("../build/head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });

  it('Returns "Hello" for ["Hello"], "Lighthouse", "labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("Returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});
