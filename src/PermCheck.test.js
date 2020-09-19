/* eslint-env jest */
const fns = require('./PermCheck');

test('PermCheck', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([4, 1, 3, 2])).toEqual(1);
    expect(fn([4, 1, 3])).toEqual(0);

    // Custom
    expect(fn([1])).toEqual(1);
    expect(fn([1, 1])).toEqual(0);
    expect(fn([0])).toEqual(0);
  });
});
