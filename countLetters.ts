export const countLetters = (str: string): { [key: string]: number } => {
  const result: { [key: string]: number } = {};
  for (let char of str) {
    if (/\w/.test(char)) {
      result[char] ? result[char]++ : (result[char] = 1);
    }
  }
  return result;
};
