/* eslint-env jest */
const fns = require('./21.merge-two-sorted-lists.js');

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function ListNodeFromNumber(I) {
  let pointer
  I.toString().split("").reverse().forEach(x => {
    pointer = new ListNode(Number(x), pointer)
  })
  return pointer
}

test('21.merge-two-sorted-lists.js', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn(
      ListNodeFromNumber(124),
      ListNodeFromNumber(134)
    )).toEqual(
      ListNodeFromNumber(112344)
    );
    // Custom
    expect(fn(
      ListNodeFromNumber(123),
      ListNodeFromNumber(456)
    )).toEqual(
      ListNodeFromNumber(123456)
    );
    expect(fn(
      ListNodeFromNumber(123),
      ListNodeFromNumber(45678)
    )).toEqual(
      ListNodeFromNumber(12345678)
    );
  });
});
