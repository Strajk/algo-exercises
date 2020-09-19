/* eslint-env jest */
const fns = require('./FrogJmp');

test('FrogJmp', () => {
  fns.forEach(fn => {
    expect(fn(10, 85, 30)).toEqual(3);
    expect(fn(5, 55, 10)).toEqual(5);
  });
});
