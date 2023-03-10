export const map = <T>(arr: T[], callback: <U>(y: U) => U) => {
  const newArr: T[] = [];
  arr.forEach((element) => newArr.push(callback(element)));
  return newArr;
};
