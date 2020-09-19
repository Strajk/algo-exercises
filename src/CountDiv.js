/*
> Compute number of integers divisible by k in range [a … b]
© Codility

Write a function that,
given three integers a, b and k,
returns the number of integers within the range [a … b]
that are divisible by k, i.e.: {i: a ≤ i ≤ b, i mod k = 0}.

Example
---
For a = 6, b = 11 and k = 2,
your function should return 3,
because there are three numbers divisible by 2 within the range [6 … 11],
namely 6, 8 and 10.

Assumptions
---
• a and b are integers within the range [0 … 2,000,000,000];
• k is an integer within the range [1 … 2,000,000,000];
• a ≤ b.

Complexity
---
• expected worst-case time complexity is O(1);
• expected worst-case space complexity is O(1).
*/

function obvious(A, B, K) {
  let count = 0;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) count++;
  }
  return count;
}

function smarter(A, B, K) {
  const high = Math.floor(B / K); //?
  const low = A > 0 ? Math.floor((A - 1) / K) : -1; //?
  return high - low; //?
}

function fromTheWeb (A, B, K) {
  let count = 0, i = A;
  while (i <= B) {
    if (i % K === 0) {
      count++;
      i += K;
    } else {
      i++;
    }
  }
  return count;
}


module.exports = [obvious, smarter, fromTheWeb];
