/* eslint-env jest */
const fns = require('./647.palindromic-substrings');

test('647.palindromic-substrings', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn("abc")).toEqual(3);
    expect(fn("aaa")).toEqual(6);
    // Custom
    expect(fn("a")).toEqual(1);
    expect(fn("aa")).toEqual(3);
    expect(fn("ab")).toEqual(2);
    expect(fn("abab")).toEqual(6); // aba, bab
  });
});
