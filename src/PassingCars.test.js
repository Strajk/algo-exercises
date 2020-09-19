/* eslint-env jest */
const fns = require('./PassingCars');

test('PassingCars', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([0, 1, 0, 1, 1])).toEqual(5);

    // Custom
    expect(fn([0])).toEqual(0);
    expect(fn([1])).toEqual(0);
    expect(fn([1, 0])).toEqual(0);
    expect(fn([0, 1, 1])).toEqual(2);
    expect(fn([0, 1])).toEqual(1);
    expect(fn([0, 1, 1, 1, 1, 1])).toEqual(5);
    expect(fn([0, 1, 0, 1, 1, 1])).toEqual(7);
  });
});
