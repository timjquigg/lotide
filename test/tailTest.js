const { tail } = require("../build/tail");
const assert = require("chai").assert;

describe("#Tail", () => {
  it('Returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });

  it("Returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
