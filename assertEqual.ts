type Primitives = {
  x: string | number | boolean;
};

export const assertEqual = function (actual: Primitives, expected: Primitives) {
  console.log(
    actual === expected
      ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
      : `❌❌❌ Assertion Failed: ${actual} !=== ${expected}`
  );
};
