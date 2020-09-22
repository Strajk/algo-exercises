/* eslint-env jest */
const fns = require('./12.integer-to-roman');

test('12.integer-to-roman', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn(3)).toEqual("III");
    expect(fn(4)).toEqual("IV");
    expect(fn(9)).toEqual("IX");
    expect(fn(58)).toEqual("LVIII");
    expect(fn(1994)).toEqual("MCMXCIV");

    // Custom
    // expect(fn()).toEqual();
  });
});
