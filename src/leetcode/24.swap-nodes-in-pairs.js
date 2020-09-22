/*
[24] Swap Nodes in Pairs
https://leetcode.com/problems/swap-nodes-in-pairs/description/

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 @param {ListNode} ln
 @return {ListNode}
 */
function naive(ln) {
  const head = new ListNode(null, /* later */)
  let tail = head
  while (ln) {
    const l = ln.val;
    const r = ln.next ? ln.next.val : undefined;
    if (typeof r === 'undefined') {
      tail.next = new ListNode(l)
      break
    }
    const node = new ListNode(r, new ListNode(l, /* later */))
    tail.next = node
    tail = node.next
    ln = ln.next.next
  }
  return head.next
}

// TODO: Recheck
// https://leetcode.com/problems/swap-nodes-in-pairs/discuss/11223/JavaScript-solution-beats-94.44-of-all-submissions.
function clean(head) {
  if (!head || !head.next) return head;

  const v1 = head;
  const v2 = head.next;
  const v3 = v2.next;

  v2.next = v1;
  v1.next = clean(v3);

  return v2;
}

if (module.parent) module.exports = [naive, clean];
