/* eslint-env jest */
const fns = require('./MaxSliceSum');

test('MaxSliceSum', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([3, 2, -6, 4, 0])).toEqual(5);

    // Custom
    expect(fn([-9])).toEqual(-9);
    expect(fn([-1])).toEqual(-1);
    expect(fn([0])).toEqual(0);
    expect(fn([1])).toEqual(1);
    expect(fn([9])).toEqual(9);

    expect(fn([-5, 5])).toEqual(5);
    expect(fn([-5, 5, -5])).toEqual(5);
    expect(fn([-5, 5, -5, 5])).toEqual(5);
  });
});
