/*
[2] Add Two Numbers
https://leetcode.com/problems/add-two-numbers/description/

You are given two non-empty linked lists representing two non-negative
integers. The digits are stored in reverse order and each of their nodes
contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the
number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 @param {ListNode} l1
 @param {ListNode} l2
 @return {ListNode}
 */
function main(l1, l2) {
  let first
  let current
  let prev

  let carry = 0
  while (l1 || l2 || carry) {
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0
    const sum = v1 + v2 + carry
    carry = (sum >= 10 ? 1 : 0)
    const num = sum % 10

    current = new ListNode(num, /* will be added in next iteration */)

    if (prev) prev.next = current
    if (!first) first = current
    prev = current

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  return first
}

function alternative(l1, l2) {
  let s = new ListNode('dummy'), cursor = s, carry = 0;

  while (l1 || l2 || carry) {

    cursor.next = new ListNode();
    cursor = cursor.next;

    cursor.val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

    carry = (cursor.val >= 10) ? 1 : 0;
    cursor.val %= 10;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return s.next;
}


const ln2number = ln => {
  let res = []
  while (ln) {
    res.unshift(ln.val)
    ln = ln.next
  }
  return Number(res.join(""))
}
const number2reversedLn = num => {
  let pointer
  num.toString().split("").forEach(x => { // building the listNode from the end, no need to reverse
    pointer = new ListNode(Number(x), pointer)
  })
  return pointer
}

function hacky(l1, l2) {
  const n1 = ln2number(l1)
  const n2 = ln2number(l2)
  const sum = n1 + n2;
  return number2reversedLn(sum)
}

if (module.parent) module.exports = [main, alternative, hacky];
