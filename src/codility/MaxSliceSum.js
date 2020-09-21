/*
> Find a maximum sum of a compact subsequence of array elements
© Codility

A *non-empty* array A consisting of `n` *integers* is given.
A pair of integers (p, q),
such that 0 ≤ p ≤ q < n,
is called a slice of array A.
The sum of a slice (p, q) is the total of
A[p] + A[p + 1] + … + A[q].

Assignment
---
Write a function that,
given an array A consisting of n integers,
returns the maximum sum of any slice of A.

Example
---
[3, 2, -6, 4, 0] the function should return 5 because:
• (3, 4) is a slice of A that has sum 4;
• (2, 2) is a slice of A that has sum −6;
• (0, 1) is a slice of A that has sum 5,
• no other slice of A has sum greater than (0, 1).

Assumptions
---
• n is an integer within the range [1 … 1,000,000];
• each element of array A is an integer within the range [-1,000,000 … 1,000,000];
• the result will be an integer within the range [-2,147,483,648 … 2,147,483,647].

Complexity
---
• expected worst-case time complexity is O(n);
• expected worst-case space complexity is O(n), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.
*/

const sumA = (A) => A.reduce((acc, x) => (acc + x), 0);

function obvious(A) {
  let max;
  for (let i = 0; i < A.length; i++) {
    const rest = (A.length - i);
    for (let j = 0; j < rest; j++) {
      const from = i;
      const to = i + j;
      const slice = A.slice(from, to + 1);
      const sum = sumA(slice);
      if (!max || sum > max) max = sum;
    }
  }
  return max;
}

function fromTheWeb(A) {
  let r = A[0];
  let t = A[0];
  let n = A.length;
  for (let i = 1; i < n; i++) {
    t = Math.max(A[i], t + A[i]);
    r = Math.max(r, t);
  }
  return r;
}

module.exports = [obvious, fromTheWeb];
