/*
> Find the missing element in a given permutation
© Codility

An array A consisting of n **different** integers is given.
The array contains integers in the range [1 … (n + 1)],
which means that exactly one element is missing.
Your goal is to find that missing element.

Write a function that,
given an array A,
returns the value of the missing element.

Example
---
Given array A such that:
[2, 3, 1, 5]
the function should return 4,
as it is the missing element.

Assumptions
---
• n is an integer within the range [0 … 100,000];
• the elements of A are all distinct;
• each element of array A is an integer within the range [1 … (n + 1)].

Complexity
---
• expected worst-case time complexity is O(n);
• expected worst-case space complexity is O(1) (not counting the storage required for input arguments).
*/

function main(A) {
  A.sort();
  for (let i = 0; i < A.length; i++) {
    const number = i + 1;
    if (A[i] !== number) return number;
  }
}

module.exports = [main];
