"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
const map = (arr, callback) => {
    const newArr = [];
    arr.forEach((element) => newArr.push(callback(element)));
    return newArr;
};
exports.map = map;
