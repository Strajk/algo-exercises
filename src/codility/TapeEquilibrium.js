/*
> Minimize the value |(A[0] + … + A[p – 1]) – (A[p] + … + A[n – 1])|
© Codility

A *non-empty* array A consisting of n integers is given.
Array A represents numbers on a tape.

Any integer p, such that 0 < p < n,
splits this tape into two non-empty parts:
A[0], A[1], …, A[p – 1] and
A[p], A[p + 1], …, A[n – 1].

The difference between the two parts is the value of:
|(A[0] + A[1] + … + A[p – 1]) – (A[p] + A[p + 1] + … + A[n − 1])|

In other words,
it is the absolute difference between the
sum of the first part and
the sum of the second part.

Example
---
Consider array A such that:
[3 , 1 , 2 , 4 , 3]
• p = 1, difference = |3 − 10| = 7;
• p = 2, difference = |4 − 9| = 5;
• p = 3, difference = |6 − 7| = 1;
• p = 4, difference = |10 − 3| = 7.

Assignment
---
Write a function that,
given a non-empty array A of n integers,
returns the **minimal difference** that can be achieved.

Example
---
Given: [3 , 1 , 2 , 4 , 3],
the function should **return 1**, as explained above.

Assumptions
---
• n is an integer within the range [2 … 100,000];
• each element of array A is an integer within the range [-1,000 … 1,000].

Complexity
---
• expected worst-case time complexity is O(n);
• expected worst-case space complexity is O(n) (not counting the storage required for input arguments).
*/

const sum = (A) => A.reduce((acc, x) => (acc + x), 0);

function main(A) {
  let lowest;
  for (let i = 1; i < A.length; i++) {
    const a = A.slice(0, i);
    const b = A.slice(i);
    const aSum = sum(a);
    const bSum = sum(b);
    const diff = Math.abs(aSum - bSum);
    if ((diff < lowest) || !lowest) lowest = diff;
  }
  return lowest;
}

function fromTheWeb(A) {
  let n = A.length;
  let s = 0;
  for (let i in A) {
    s += A[i];
  }
  let r = 100000;
  let s1 = 0;
  for (let p = 1; p < n; p++) {
    s1 += A[p - 1];
    let s2 = s - s1;
    let t = Math.abs(s1 - s2);
    if (t < r) {
      r = t;
    }
  }
  return r;
}

module.exports = [main, fromTheWeb];
