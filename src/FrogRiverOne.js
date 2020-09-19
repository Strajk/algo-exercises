/*
> Find the earliest time when a frog can jump to the other side of a river
© Codility

A small frog wants to get to the other side of a river.
The frog is initially located on one bank of the river (position 0)
and wants to get to the opposite bank (position x + 1).
Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of n integers representing the falling leaves.
A[k] represents the position where one leaf falls at time k, measured in seconds.

The goal is to find the earliest time
when the frog can jump to the other side of the river.

The frog can cross only when leaves appear at every position across the river from 1 to x
(that is, we want to find the earliest moment when all the positions from 1 to x are covered by leaves).
You may assume that the speed of the current in the river is negligibly small,
i.e. the leaves do not change their positions once they fall in the river.

Example
---
Given integer x = 5 and array A [1, 3, 1, 4, 2, 3, 5, 4],
In second 6, a leaf falls into position 5.
This is the earliest time when leaves appear in every position across the river.

Assignment
---
Write a function that, given a non-empty array A consisting of n integers and integer x,
returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return -1.

For given example, the function should return 6.

Assumptions
---
• n and x are integers within the range [1 … 100,000];
• each element of array A is an integer within the range [1 … x].

Complexity
---
• expected worst-case time complexity is O(n);
• expected worst-case space complexity is O(x) (not counting the storage required for input arguments).
*/

function main(A, x) {
  const positions = new Set();
  for (let i = 0; i < A.length; i++) {
    positions.add(A[i]);
    if (positions.size === x) return i;
  }
  return -1;
}

function fromTheWeb(A, x) {
  let B = [];
  for (let i = 0; i < x; i++) {
    B[i] = -1;
  }
  let n = A.length;
  for (let i = 0; i < n; i++) {
    if (B[A[i] - 1] === -1) {
      B[A[i] - 1] = i;
    }
  }
  let r = 0;
  for (let i in B) {
    let b = B[i];
    if (b > r) {
      r = b;
    } else if (b === -1) {
      return -1;
    }
  }
  return r;
}

module.exports = [main, fromTheWeb];
