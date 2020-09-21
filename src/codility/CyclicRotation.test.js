/* eslint-env jest */
const fns = require('./CyclicRotation');

test('CyclicRotation', () => {
  fns.forEach(fn => {
    expect(fn([3, 8, 9, 7, 6], 1)).toEqual([6, 3, 8, 9, 7]);
    expect(fn([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
    expect(fn([0, 0, 0], 1)).toEqual([0, 0, 0]);
    expect(fn([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });
});
