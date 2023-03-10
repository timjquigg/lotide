"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.without = void 0;
const without = (source, itemsToRemove) => {
    const result = [];
    for (let item of source) {
        if (!itemsToRemove.includes(item)) {
            result.push(item);
        }
    }
    return result;
};
exports.without = without;
