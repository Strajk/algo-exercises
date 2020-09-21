/* eslint-env jest */
const fns = require('./9.palindrome-number.js');

test('9.palindrome-number.js', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn(121)).toEqual(true);
    expect(fn(-121)).toEqual(false);
    expect(fn(10)).toEqual(false);
    // Custom
    expect(fn(1)).toEqual(true);
    expect(fn(11)).toEqual(true);
    expect(fn(1221)).toEqual(true);
  });
});
