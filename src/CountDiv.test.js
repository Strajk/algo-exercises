/* eslint-env jest */
const fns = require('./CountDiv');

test('CountDiv', () => {
  fns.forEach(fn => {
    expect(fn(6, 11, 2)).toEqual(3);
    expect(fn(11, 345, 17)).toEqual(20);

    expect(fn(0, 0, 11)).toEqual(1);
    expect(fn(0, 1, 11)).toEqual(1);
    expect(fn(1, 1, 11)).toEqual(0);

    expect(fn(10, 10, 5)).toEqual(1);
    expect(fn(10, 10, 7)).toEqual(0);
    expect(fn(10, 10, 20)).toEqual(0);
  });
});
