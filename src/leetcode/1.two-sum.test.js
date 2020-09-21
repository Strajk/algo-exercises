/* eslint-env jest */
const fns = require('./1.two-sum.js');

test('1.two-sum.js', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(fn([3, 2, 4], 6)).toEqual([1, 2]);
    expect(fn([3, 3], 6)).toEqual([0, 1]);
    // Custom
    // expect(fn()).toEqual();
  });
});
