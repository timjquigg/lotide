"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.letterPositions = void 0;
const letterPositions = (sentence) => {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (/\w/.test(char)) {
            results[char] ? results[char].push(i) : (results[char] = [i]);
        }
    }
    return results;
};
exports.letterPositions = letterPositions;
