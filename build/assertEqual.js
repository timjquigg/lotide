"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEqual = void 0;
const assertEqual = function (actual, expected) {
    console.log(actual === expected
        ? `✅✅✅ Assertion Passed: ${actual} === ${expected}`
        : `❌❌❌ Assertion Failed: ${actual} !=== ${expected}`);
};
exports.assertEqual = assertEqual;
