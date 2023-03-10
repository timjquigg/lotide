"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countLetters = void 0;
const countLetters = (str) => {
    const result = {};
    for (let char of str) {
        if (/\w/.test(char)) {
            result[char] ? result[char]++ : (result[char] = 1);
        }
    }
    return result;
};
exports.countLetters = countLetters;
