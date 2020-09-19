/* eslint-env jest */
const fns = require('./BinaryGap');

test('BinaryGap', () => {
  fns.forEach(fn => {
    expect(fn(9)).toEqual(2);
    expect(fn(529)).toEqual(4);
    expect(fn(20)).toEqual(1);
    expect(fn(15)).toEqual(0);
    expect(fn(2)).toEqual(0);
    expect(fn(1041)).toEqual(5);
    expect(fn(32)).toEqual(0);
  });
});
