/* eslint-env jest */
const fns = require('./MaxCounters');

test('MaxCounters', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);

    // Custom
    expect(fn(1, [1])).toEqual([1]);
    expect(fn(1, [1, 1])).toEqual([2]);
    expect(fn(1, [2, 1])).toEqual([1]);
  });

});
