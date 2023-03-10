export const countOnly = (
  allItems: string[],
  itemsToCount: { [key: string]: boolean }
): { [key: string]: number } => {
  const results: { [key: string]: number } = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      results[item] ? results[item]++ : (results[item] = 1);
    }
  }
  return results;
};
