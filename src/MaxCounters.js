/*
> Calculate the values of counters after applying all alternating operations:
> increase counter by 1; set value of all counters to current maximum

You are given n counters,
initially set to 0,
and you have two possible operations on them:
• increase(x) − counter x is increased by 1,
• maxcounter − all counters are set to the maximum value of any counter.

A non-empty array A of `m` integers is given.
This array represents consecutive operations:
• if A[k] = x, such that 1 ≤ x ≤ n, then operation k is increase(x);
• if A[k] = n + 1 then operation k is maxcounter.

Example
---
Given integer n = 5
and array A [3, 4, 4, 6, 1, 4, 4]
the values of the counters after each consecutive operation will be:
• (0, 0, 1, 0, 0);
• (0, 0, 1, 1, 0);
• (0, 0, 1, 2, 0);
• (2, 2, 2, 2, 2);
• (3, 2, 2, 2, 2);
• (3, 2, 2, 3, 2);
• (3, 2, 2, 4, 2).

The goal is to calculate the value of every counter after all operations.

Assignment
---
Write a function that, given an integer n and a non-empty array A consisting of m integers, returns a sequence of integers representing the values of the counters.

Result array should be returned as an array of integers.

For given example the function should return [3, 2, 2, 4, 2], as explained above.

Assumptions
---
• n and m are integers within the range [1 … 100,000];
• each element of array A is an integer within the range [1 … n + 1].

Complexity
---
• expected worst-case time complexity is O(n + m);
• expected worst-case space complexity is O(n) (not counting the storage required for input arguments).
*/

function main(x, A) {
  const maxSignal = x + 1;

  let counters = Array(x).fill(0);
  for (const i of A) {
    if (i === maxSignal) {
      const max = Math.max(...counters);
      counters = counters.fill(max);
    } else {
      counters[i - 1]++;
    }
  }
  return counters;
}

module.exports = [main];
