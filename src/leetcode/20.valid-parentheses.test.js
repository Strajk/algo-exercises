/* eslint-env jest */
const fns = require('./20.valid-parentheses.js');

test('20.valid-parentheses.js', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn("()")).toEqual(true);
    expect(fn("()[]{}")).toEqual(true);
    expect(fn("(]")).toEqual(false);
    expect(fn("[[)]")).toEqual(false);
    // Custom
    expect(fn("({[]}){}")).toEqual(true);
    expect(fn("[")).toEqual(false);
    expect(fn("[]]")).toEqual(false);
    expect(fn("[]][[][]")).toEqual(false);
  });
});
