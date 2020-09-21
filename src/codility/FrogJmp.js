/*
> Count minimal number of jumps from position x to y
© Codility

A small frog wants to get to the other side of the road.
The frog is currently located at position x
and wants to get to a position greater than or equal to y.
The small frog always jumps a fixed distance, d.

Count the minimal number of jumps
that the small frog must perform to reach its target.

Assignment
---
Write a function that,
given three integers x, y and d,
returns the minimal number of jumps from position x
to a position equal to or greater than y.

Example
---
Given: x = 10, y = 85, d = 30, the function should return 3,
because the frog will be positioned as follows:
• after the first jump, at position 10 + 30 = 40;
• after the second jump, at position 10 + 30 + 30 = 70;
• after the third jump, at position 10 + 30 + 30 + 30 = 100.

Assumptions
---
• x, y and d are integers within the range [1 … 1,000,000,000];
• x ≤ y.

Complexity
---
• expected worst-case time complexity is O(1);
• expected worst-case space complexity is O(1).
*/

function obvious(x, y, d) {
  let current = x;
  let counter = 0;
  while (current < y) {
    current += d;
    counter++;
  }
  return counter;
}

function trunc(x, y, d) {
  const distance = y - x;
  const distanceShifted = distance - 1;
  return Math.trunc(distanceShifted / d) + 1;
}

function ceil(x, y, d) {
  return Math.ceil((y - x) / d);
}

module.exports = [obvious, trunc, ceil];
