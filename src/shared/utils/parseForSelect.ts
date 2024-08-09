export const parseForSelect = (arr: (string | number)[]): Select.Option[] =>
  arr.map((item) => ({ value: item, name: `${item}` }));
