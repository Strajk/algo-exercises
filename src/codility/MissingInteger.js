/*
> Find the smallest positive integer that does not occur in a given sequence
© Codility

Write a function that,
given an array A of n integers,
returns the smallest positive integer (greater than 0)
that does not occur in A.

Example
---
Given A = [1, 3, 6, 4, 1, 2],
the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [-1, -3], the function should return 1.

Assumptions
---
• n is an integer within the range [1 … 100,000];
• each element of array A is an integer within the range [-1,000,000 … 1,000,000].

Complexity
---
• expected worst-case time complexity is O(n);
• expected worst-case space complexity is O(n) (not counting the storage required for input arguments).
*/

function main(A) {
  const AUniqAndSorted = [...new Set(A)].sort();
  const lowest = AUniqAndSorted[0];
  for (let i = 0; i <= AUniqAndSorted.length; i++) {
    const curr = AUniqAndSorted[i];
    const should = lowest + i;
    if (curr !== should) return (should <= 0) ? 1 : should;
  }
}

function fromTheWeb(A) {
  if (!A.includes(1)) {
    return 1;
  }
  A = A.filter(a => a > 0);
  A.sort((a, b) => a - b);
  let n = A.length;
  for (let i = 1; i < n; i++) {
    if (A[i] - A[i - 1] > 1) {
      return A[i - 1] + 1;
    }
  }
  return A[n - 1] + 1;
}

module.exports = [main, fromTheWeb];
