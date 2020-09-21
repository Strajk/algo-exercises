/* eslint-env jest */
const fns = require('./TapeEquilibrium');

test('TapeEquilibrium', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([3 , 1 , 2 , 4 , 3])).toEqual(1);
    // Custom
    expect(fn([-1, 1])).toEqual(2);
    expect(fn([1, -1])).toEqual(2);
    expect(fn([0, 0])).toEqual(0);
    expect(fn([1, 0])).toEqual(1);
    expect(fn([0, 1])).toEqual(1);
  });
});
