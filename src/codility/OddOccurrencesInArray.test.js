/* eslint-env jest */
const fns = require('./OddOccurrencesInArray');

test('OddOccurrencesInArray', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([9, 3, 9, 3, 9, 7, 9])).toEqual(7);
    // Custom
    expect(fn([3, 3, 5, 5, 5, 5, 7, 9, 9])).toEqual(7);
  });
});
