/* eslint-env jest */
const fns = require('./Triangle');

test('Triangle', () => {
  fns.forEach(fn => {
    expect(fn([10, 2, 5, 1, 8, 20])).toEqual(1);
    expect(fn([10, 50, 5, 1])).toEqual(0);
    expect(fn([-5, -4, -3])).toEqual(0);
  });
});
