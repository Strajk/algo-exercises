/* eslint-env jest */
const fns = require('./CountFactors');

test('CountFactors', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn(24)).toEqual(8);

    // Custom
    expect(fn(1)).toEqual(1);
    expect(fn(2)).toEqual(2);
    expect(fn(3)).toEqual(2);
    expect(fn(4)).toEqual(3);
    expect(fn(5)).toEqual(2);
    expect(fn(6)).toEqual(4);
    expect(fn(1024)).toEqual(11);
    expect(fn(1025)).toEqual(6);
  });
});
