/* eslint-env jest */
const fns = require('./11.container-with-most-water');

test('11.container-with-most-water', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn([1,8,6,2,5,4,8,3,7])).toEqual(49);
    // Custom
    // expect(fn()).toEqual();
  });
});
