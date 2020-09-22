/* eslint-env jest */
const fns = require('./24.swap-nodes-in-pairs');

function a2l(arr){
  return arr.reduceRight((next, val) => ({val, next}), null);
}

test('24.swap-nodes-in-pairs', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn(a2l([1, 2]))).toEqual(a2l([2, 1]))
    expect(fn(a2l([1, 2, 3, 4]))).toEqual(a2l([2, 1, 4, 3]));
    // Custom
    expect(fn(a2l([1]))).toEqual(a2l([1]))
    expect(fn(a2l([1, 2, 3]))).toEqual(a2l([2, 1, 3]))
    expect(fn(a2l([4,0,6,2,8]))).toEqual(a2l([0, 4, 2, 6, 8]))
  });
});
