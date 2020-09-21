/* eslint-env jest */
const fns = require('./MaxProfit');

test('MaxProfit', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([ 23171, 21011, 21123, 21366, 21013, 21367 ])).toEqual(356);

    // Custom
    expect(fn([])).toEqual(0);
    expect(fn([0])).toEqual(0);
    expect(fn([1])).toEqual(0);
    expect(fn([1, 0])).toEqual(0);
    expect(fn([100, 50])).toEqual(0);
  });
});
