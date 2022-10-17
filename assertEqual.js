const assertEqual = function(actual, expected) {
  console.log(
    actual === expected ?
      `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
      `❌❌❌ Assertion Failed: ${actual} !=== ${expected}`
  );
};

// Tests:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("Hello", "hello");
assertEqual("Test", "Test");
assertEqual(1, 4);