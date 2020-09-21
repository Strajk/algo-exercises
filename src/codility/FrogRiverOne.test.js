/* eslint-env jest */
const fns = require('./FrogRiverOne');

test('FrogRiverOne', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([1, 3, 1, 4, 2, 3, 5, 4], 5)).toEqual(6);

    // Custom
    expect(fn([], 1)).toEqual(-1);
    expect(fn([1], 1)).toEqual(0);
    expect(fn([1, 1, 1], 1)).toEqual(0);
    expect(fn([1, 1, 1], 2)).toEqual(-1);
    expect(fn([2, 2, 2, 1], 2)).toEqual(3);
  });
});
