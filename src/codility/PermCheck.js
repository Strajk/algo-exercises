/*
> Check whether array A is a permutation
© Codility

A non-empty array A consisting of n integers is given.
A “permutation” is a sequence containing each element from 1 to n once, and only once.

Example
---
Array A such that:
[4, 1, 3, 2] => yes
[4, 1, 3] => no, because value 2 is missing.

The goal is to check whether array A is a permutation.

Assignment
---
Write a function that, given an array A,
returns 1 if array A is a permutation and 0 if it is not.

Assumptions
---
• n is an integer within the range [1 … 100,000];
• each element of array A is an integer within the range [1 … 1,000,000,000].

Complexity
---
• expected worst-case time complexity is O(n);
• expected worst-case space complexity is O(n) (not counting the storage required for input arguments).
*/

function main(A) {
  A.sort();
  if (A[0] === 1 && A[A.length - 1] === A.length) return 1;
  return 0;
}

function fromTheWeb(A) {
  A.sort((a, b) => a - b);
  let n = A.length;
  for (let i = 1; i <= n; i++) {
    if (A[i - 1] !== i) {
      return 0;
    }
  }
  return 1;
}

module.exports = [main, fromTheWeb];
