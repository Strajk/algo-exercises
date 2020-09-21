/*
> Find value that occurs in odd number of elements
© Codility

A non-empty array A consisting of n integers is given.
The array contains an odd number of elements,
and each element of the array
can be paired with another element
that has the same value,
except for one element that is left unpaired.

Example
---
[9, 3, 9, 3, 9, 7, 9]:
• the elements at indexes 0 and 2 have value 9;
• the elements at indexes 1 and 3 have value 3;
• the elements at indexes 4 and 6 have value 9;
• the element at index 5 has value 7 and is unpaired.

Assignment
---
Write a function that,
given an array A consisting of n integers
fulfilling the above conditions,
returns the value of the unpaired element.

Assumptions
---
• n is an odd integer within the range [1 … 1,000,000];
• each element of array A is an integer within the range [1 … 1,000,000,000];
• all but one of the values in A occur an even number of times.

Complexity
---
• expected worst-case time complexity is O(n);
• expected worst-case space complexity is O(1) (not counting the storage required for input arguments).
*/

function main(A) {
  A.sort();
  for (let i = 0; i <= A.length - 2;) {
    const curr = A[i];
    const next = A[i + 1];
    if (curr === next) {
      i += 2;
    } else {
      return curr;
    }
  }
}

function another(A) {
  let D = {};
  for (let i in A) {
    if (A[i] in D) {
      D[A[i]]++;
    } else {
      D[A[i]] = 1;
    }
  }
  for (let i in D) {
    if (D[i] % 2 === 1) {
      return parseInt(i);
    }
  }
  return 0;
}

module.exports = [main, another];
