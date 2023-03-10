export const letterPositions = (
  sentence: string
): { [key: string]: number[] } => {
  const results: { [key: string]: number[] } = {};
  for (let i = 0; i < sentence.length; i++) {
    let char: string = sentence[i];
    if (/\w/.test(char)) {
      results[char] ? results[char].push(i) : (results[char] = [i]);
    }
  }
  return results;
};
