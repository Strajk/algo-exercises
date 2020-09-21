/* eslint-env jest */
const fns = require('./27.remove-element.js');

test('27.remove-element.js', () => {
  fns.forEach(fn => {
    // Assignment
    const A = [3,2,2,3]
    expect(fn(A, 3)).toEqual(2);
    expect(A.slice(0, 2)).toEqual([2, 2]);

    const B = [0,1,2,2,3,0,4,2]
    expect(fn(B, 2)).toEqual(5);
    expect(B.slice(0, 5)).toEqual([0, 1, 3, 0, 4]);

    // Custom
    // expect(fn()).toEqual();
  });
});
