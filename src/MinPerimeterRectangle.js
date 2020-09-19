/*
> Find the minimal perimeter of any rectangle whose area equals n
© Codility

An integer n is given, representing the area of some rectangle.

The area of a rectangle whose sides are of length a and b is a · b,
and the perimeter is 2 · (a + b).

The goal is to find
the minimal perimeter of any rectangle
whose area equals n.
The sides of this rectangle should be only integers.

Example
---
Given integer n = 30, rectangles of area 30 are:
• (1, 30), with a perimeter of 62;
• (2, 15), with a perimeter of 34;
• (3, 10), with a perimeter of 26;
• (5, 6), with a perimeter of 22.

Assignment
---
Write a function that, given an integer n,
returns the minimal perimeter of any rectangle
whose area is exactly equal to n.

For given example, the function should return 22, as explained above.

Assumptions
---
• n is an integer within the range [1 … 1,000,000,000].

Complexity
---
• expected worst-case time complexity is O(sqrt(n));
• expected worst-case space complexity is O(1).
*/

function main(area) {
  // find dimension of square and that use closest integers
  const square = Math.sqrt(area);
  const a = Math.floor(square);
  const b = Math.ceil(square);
  const perimeter = 2 * (a + b);
  return perimeter;
}

function fromTheWeb(n) {
  let r = 2000000000;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      let t = 2 * (i + (n / i));
      if (t < r) {
        r = t;
      }
    }
  }
  return r;
}

module.exports = [main, fromTheWeb];
