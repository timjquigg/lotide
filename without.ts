export const without = <T>(source: T[], itemsToRemove: T[]): T[] => {
  const result: T[] = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};
