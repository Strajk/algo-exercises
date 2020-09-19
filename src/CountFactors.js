/*
> Count factors of given number n
© Codility

A positive integer d is a “factor” of a positive integer n
if there exists an integer m such that n = d · m

Example
---
6 is a factor of 24,
because m = 4 satisfies the above condition
(24 = 6 · 4).

Assignment
---
Write a function that,
given a positive integer n,
returns the number of its factors.

Example
---
Given n = 24,
the function should return 8,
because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24.
There are no other factors of 24.

Assumptions
---
• n is an integer within the range [1 … 2,147,483,647].

Complexity
---
• expected worst-case time complexity is O(sqrt(n));
• expected worst-case space complexity is O(1).
*/

function naive(n) {
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return factors.length;
}

function fromTheWeb(n) {
  let r = 0;
  let t = Math.sqrt(n);
  let i = 1;
  while (i < t) {
    if (n % i === 0) {
      r += 2;
    }
    i++;
  }
  return r + (i === t ? 1 : 0);
}

module.exports = [naive, fromTheWeb];
