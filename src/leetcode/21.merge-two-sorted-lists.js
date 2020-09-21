/*
[21] Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/description/

Merge two sorted linked lists and return it as a new sorted list.
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
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
function mergeTwoLists(l1, l2) {
  let initial = new ListNode(0)
  let pointer = initial
  while (l1 && l2) {
    if (l1.val > l2.val) {
      pointer.next = l2
      l2 = l2.next
    } else {
      pointer.next = l1
      l1 = l1.next
    }
    pointer = pointer.next
  }

  if(!l1) {
    pointer.next = l2;
  } else {
    pointer.next = l1;
  }

  return initial.next
}

if (module.parent) module.exports = [mergeTwoLists];
