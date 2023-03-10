"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = void 0;
const flatten = (arr) => {
    const newArr = [];
    for (let item of arr) {
        if (!Array.isArray(item)) {
            newArr.push(item);
        }
        else {
            newArr.push(...(0, exports.flatten)(item));
        }
    }
    return newArr;
};
exports.flatten = flatten;
