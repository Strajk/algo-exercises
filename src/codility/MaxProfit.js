/*
> Given a log of stock prices compute the maximum possible earning
© Codility

An array A consisting of n integers is given.
It contains daily prices of a stock share for a period of n consecutive days.
If a single share was bought on day p and sold on day q,
where 0 ≤ p ≤ q < n, then the “profit” of such transaction is equal to A[q] – A[p],
provided that A[q] ≥ A[p].
Otherwise, the transaction brings “loss” of A[p] – A[q].

Example
---
Consider the following array A consisting of six elements such that:
[ 23171, 21011, 21123, 21366, 21013, 21367 ]
If a share was bought on day 0 and sold on day 2,
a loss of 2048 would occur because A[2] − A[0] = 21123 – 23171 = -2048.
If a share was bought on day 4 and sold on day 5,
a profit of 354 would occur because A[5] – A[4] = 21367 – 21013 = 354.
Maximum possible profit was 356.
It would occur if a share was bought on day 1 and sold on day 5.

Assignment
---
Write a function that,
given an array A consisting of n integers containing daily prices of a stock share for a period of n consecutive days,
returns the maximum possible profit from one transaction during this period.
The function should return 0 if it was impossible to gain any profit.

For given example, the function should return 356, as explained above.

Assumptions
---
• n is an integer within the range [0 … 400,000];
• each element of array A is an integer within the range [0 … 200,000].

Complexity
---
• expected worst-case time complexity is O(n);
• expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.
*/

function obvious(A) {
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    const rest = (A.length - i);
    for (let j = 0; j < rest; j++) {
      const from = i;
      const to = i + j;
      const diff = A[to] - A[from];
      if (diff > max) max = diff;
    }
  }
  return max;
}

function fromTheWeb(A) {
  let t = 0;
  let r = 0;
  let n = A.length;
  for (let i = 1; i < n; i++) {
    t = Math.max(0, t + A[i] - A[i - 1]);
    r = Math.max(r, t);
  }
  return r > 0 ? r : 0;
}

module.exports = [obvious, fromTheWeb];
