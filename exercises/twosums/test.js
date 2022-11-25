const twoSum = require('./index');

test('twoSum function exists', () => {
  expect(twoSum).toBeDefined();
});

test('twoSum handles empty array as an input', () => {
  expect(twoSum([], 5)).toEqual(null);
});

test('twoSum handles array with only one element as an input', () => {
  expect(twoSum([5], 5)).toEqual(null);
});

test('twoSum handles array that will not come up with solution', () => {
  expect(twoSum([5, 7, 9, 2, 3], 2)).toEqual(null);
  expect(twoSum([5, 7, 9, 2, 1], 25)).toEqual(null);
});

test('twoSum handles array that will  come up with solution', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  expect(twoSum([3, 2, 4, 1, 9], 12)).toEqual([0, 4]);
});
