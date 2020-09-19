/* eslint-env jest */
const fns = require('./MaxProductOfThree');

test('MaxProductOfThree', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([-3, 1, 2, -2, 5, 6])).toEqual(60);

    // Custom
    expect(fn([0, 0, 0])).toEqual(0);
    expect(fn([1, 1, 1])).toEqual(1);
    expect(fn([1, 1, -1])).toEqual(-1);
  });
});
