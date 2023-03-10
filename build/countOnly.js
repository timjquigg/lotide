"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countOnly = void 0;
const countOnly = (allItems, itemsToCount) => {
    const results = {};
    for (const item of allItems) {
        if (itemsToCount[item]) {
            results[item] ? results[item]++ : (results[item] = 1);
        }
    }
    return results;
};
exports.countOnly = countOnly;
