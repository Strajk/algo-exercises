/* eslint-env jest */
const fns = require('./MissingInteger');

test('MissingInteger', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([1, 3, 6, 4, 1, 2])).toEqual(5);
    expect(fn([1, 2, 3])).toEqual(4);
    expect(fn([-1, -3])).toEqual(1);

    // Custom
    expect(fn([1, 6])).toEqual(2);
  });
});
