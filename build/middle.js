"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middle = void 0;
const middle = (arr) => {
    const mid = [];
    const middleIndex = Math.floor(arr.length / 2);
    if (arr.length > 2 && arr.length % 2 === 1) {
        mid.push(arr[middleIndex]);
    }
    else if (arr.length > 2 && arr.length % 2 === 0) {
        mid.push(...arr.slice(middleIndex - 1, middleIndex + 1));
    }
    return mid;
};
exports.middle = middle;
