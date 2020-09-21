/* eslint-env jest */
const fns = require('./PermMissingElem');

test('PermMissingElem', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([2, 3, 1, 5])).toEqual(4);

    // Custom
    // expect(fn()).toEqual();
  });
});
