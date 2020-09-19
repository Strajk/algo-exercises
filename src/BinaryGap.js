/*
> Find longest sequence of zeros in binary representation of an integer
© Codility

A “binary gap” within a positive integer `n` is
any maximal sequence of consecutive zeros
that is surrounded by ones at both ends
in the binary representation of n.

Example
---
- 9 -> 1001 -> [2]
- 529 -> 1000010001 -> [4, 3]
- 20 -> 10100 -> [1]
- 15 -> 1111 -> []
- 2 -> 100000 -> []

Assignment
---
Write a function that,
given a positive integer n,
returns the length of its longest binary gap.
returns 0 if n doesn’t contain a binary gap.

Example
---
Given n = 1041,
the function should return 5,
because n has binary representation 10000010001
and so its longest binary gap is of length 5.

Given n = 32
the function should return 0,
because n has binary representation 100000
and thus no binary gaps.

Assumptions
---
• n is an integer within the range [1 … 2,147,483,647].

Complexity
---
• expected worst-case time complexity is O(log(n));
• expected worst-case space complexity is O(1).
*/


function dec2bin(dec){
  return dec.toString(2);
  // return (dec >>> 0).toString(2); // only needed for negative numbers
}

function main(n) {
  const bin = dec2bin(n).split('');

  let longest = 0;

  let startIdx;
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') {
      if (typeof startIdx === 'undefined') {
        startIdx = i;
      } else {
        const length = i - startIdx - 1;
        if (length > longest) longest = length;
        startIdx = undefined;
      }
    }
  }
  return longest;
}

module.exports = [main]
