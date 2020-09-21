/* eslint-env jest */
const fns = require('./2.add-two-numbers.js');

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

function humanFriendly(I) {
  return ListNodeFromNumber(
    Number(I.toString().split("").reverse().join(""))
  )
}

test('2.add-two-numbers.js', () => {
  fns.forEach(fn => {
    // Assignment
    // Beware that assignment example is very sneaky, as
    //   243              342
    // + 564  but also  + 465
    // = 807            = 807
    expect(fn(
      ListNodeFromNumber(243),
      ListNodeFromNumber(564)
    )).toEqual(
      ListNodeFromNumber(708)
    );
    // Custom
    expect(fn(
      humanFriendly(97),
      humanFriendly(8)
    )).toEqual(
      humanFriendly(105)
    );
    expect(fn(
      humanFriendly(0),
      humanFriendly(1)
    )).toEqual(
      humanFriendly(1)
    );
    expect(fn(
      humanFriendly(9),
      humanFriendly(8)
    )).toEqual(
      humanFriendly(17)
    );
  });
});
