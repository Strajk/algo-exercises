/* eslint-env jest */
const fns = require('./22.generate-parentheses');

test('22.generate-parentheses', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn(1)).toEqual([
      "()",
    ])
    expect(fn(2)).toEqual([
      "(())",
      "()()",
    ])
    expect(fn(3)).toEqual([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ]);
    expect(fn(4)).toEqual([
      '(((())))',
      '((()()))',
      '((())())',
      '((()))()',
      '(()(()))',
      '(()()())',
      '(()())()',
      '(())(())',
      '(())()()',
      '()((()))',
      '()(()())',
      '()(())()',
      '()()(())',
      '()()()()'
    ]);
    // Custom
    // expect(fn()).toEqual();
  });
});
