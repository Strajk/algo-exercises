/*
> Determine whether a triangle can be built from a given set of edges
© Codility

An array A consisting of n integers is given.
A triplet (p, q, r) is “triangular” if
0 ≤ p < q < r < n and
A[p] + A[q] > A[r],
A[q] + A[r] > A[p],
A[r] + A[p] > A[q].

Example
---
Consider array A such that:
[10, 2, 5, 1, 8, 20]
Triplet (0, 2, 4) is triangular.

Assignment
---
Write a function that, given an array A consisting of n integers,
returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

Example
---
Given array A such that: [10, 2, 5, 1, 8, 20], the function should return 1, as explained above.
Given array A such that: [10, 50, 5, 1], the function should return 0.

Assumptions
---
• n is an integer within the range [0 … 100,000];
• each element of array A is an integer within the range [-2,147,483,648 … 2,147,483,647].

Complexity
---
• expected worst-case time complexity is O(n · log(n));
• expected worst-case space complexity is O(n), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.
*/

function solution1(A) {
  let n = A.length;
  if (n < 3) return 0;
  A.sort((a, b) => a - b);
  // if (A[0] < 0) return 0; // Not needed, as `p + q > r` on sorted array covers that
  for (let i = 0; i < n - 2; i++) {
    const p = A[i];
    const q = A[i + 1];
    const r = A[i + 2];
    if (
      p + q > r
      // && q + r > p // Not needed, as `p + q > r` on sorted array covers that
      // && r + p > q // // Not needed, as `p + q > r` on sorted array covers that
    ) return 1;
  }
  return 0;
}

module.exports = [solution1];
