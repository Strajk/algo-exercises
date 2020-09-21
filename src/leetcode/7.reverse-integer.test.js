/* eslint-env jest */
const fns = require('./7.reverse-integer.js');

test('7.reverse-integer.js', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn(123)).toEqual(321);
    expect(fn(-123)).toEqual(-321);
    expect(fn(120)).toEqual(21);

    expect(fn(1534236469)).toEqual(0);
    // Custom
    // expect(fn()).toEqual();
  });
});

