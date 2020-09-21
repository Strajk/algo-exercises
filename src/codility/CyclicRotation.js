/*
> Rotate an array to the right by a given number of steps
© Codility

An array A consisting of n integers is given.
Rotation of the array means that
each element is shifted right by one index,
and the last element of the array is moved to the first place.

Example
---
The rotation of array
[3, 8, 9, 7, 6] is
[6, 3, 8, 9, 7]
(elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A k times;
that is, each element of A will be shifted to the right k times.

Assignment
---
Write a function that,
given an array A consisting of n integers and an integer k,
returns the array A rotated k times.

Example
---
Given A = [3, 8, 9, 7, 6],   k = 3,
the function should return [9, 7, 6, 3, 8].
Three rotations were made:
• [3, 8, 9, 7, 6] → [6, 3, 8, 9, 7];
• [6, 3, 8, 9, 7] → [7, 6, 3, 8, 9];
• [7, 6, 3, 8, 9] → [9, 7, 6, 3, 8].

Given A = [0, 0, 0], k = 1,
the function should return [0, 0, 0].

Given A = [1, 2, 3, 4], k = 4
the function should return [1, 2, 3, 4].

Assumptions
---
• n and k are integers within the range [0 … 100];
• each element of array A is an integer within the range [-1,000 … 1,000].
*/

function obvious(A, k) {
  const result = [];
  A.forEach((x, i) => {
    const newIndex = (i + k) % A.length;
    result[newIndex] = x;
  });
  return result;
}

function smarter(A, k) {
  const split = A.length - (k % A.length); //?
  const a = A.slice(split, A.length); //?
  const b = A.slice(0, split); //?
  return [...a, ...b];
}

function fromTheWeb(A, k) {
  let n = A.length;
  let R = [];
  if (n !== 0) {
    k %= n;
  }
  for (let i = 0; i < n; i++) {
    R[i] = A[i - k + (i < k ? n : 0)];
  }
  return R;
}

module.exports = [obvious, smarter, fromTheWeb];
