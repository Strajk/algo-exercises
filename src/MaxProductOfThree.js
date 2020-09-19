/*
> Maximize A[p] · A[q] · A[r] for any triplet (p, q, r)
© Codility

A *non-empty* array A consisting of n integers is given.
The product of triplet (p, q, r) equates to
A[p] · A[q] · A[r] (0 ≤ p < q < r < n).

Example
---
Array A such that:
[-3, 1, 2, -2, 5, 6]
contains the following example triplets:
• (0, 1, 2), product is -3 · 1 · 2 = -6;
• (1, 2, 4), product is 1 · 2 · 5 = 10;
• (2, 4, 5), product is 2 · 5 · 6 = 60.

Your goal is to find the maximal product of any triplet.

Write a function that,
given a non-empty array A,
returns the value of the maximal product of any triplet.

For given example, the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Assumptions
---
• n is an integer within the range [3 … 100,000];
• each element of array A is an integer within the range [-1,000 … 1,000].

Complexity
---
• expected worst-case time complexity is O(n · log(n));
• expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.
*/

function main(A) {
  const l = A.length;

  let max;
  for (let p = 0; p < l; p++) {
    for (let q = p + 1; q < l; q++) {
      for (let r = q + 1; r < l; r++) {
        const product = A[p] * A[q] * A[r];
        if (typeof max === 'undefined' || max < product) max = product;
      }
    }
  }
  return max;
}

function smart(A) {
  const l = A.length;
  A.sort();
  const candidate = A[l - 3] * A[l - 2] * A[l - 1];
  const candidateIfLargeNegatives = A[0] * A[1] * A[l - 1];
  return Math.max(candidate, candidateIfLargeNegatives);
}

function fromTheWeb(A) {
  A.sort((a, b) => a - b);
  let n = A.length;
  return Math.max(
    A[0] * A[1] * A[n - 1],
    A[n - 3] * A[n - 2] * A[n - 1],
  );
}

module.exports = [main, smart, fromTheWeb];
