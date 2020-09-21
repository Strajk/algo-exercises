/*
[7] Reverse Integer
https://leetcode.com/problems/reverse-integer/description/

Given a 32-bit signed integer, reverse digits of an integer.

Example:
Input: 123
Output: 321

Example:
Input: -123
Output: -321

Example:
Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers
within the 32-bit signed integer range: [−2^31,  2^31 − 1].
For the purpose of this problem, assume that your function returns 0 when the reversed
integer overflows.
*/


/**
 @param {number} x
 @return {number}
 */
function reverse(x) {
  const sign = x < 0 ? "-" : ""
  const res = parseInt(
    sign + (x).toString().split("").reverse().join("") // js will strip "-" at the end on negative numbers
  )
  // 32bit limit
  return (res >= -0x80000000 && res <= 0x7fffffff) ? res : 0;
}

if (module.parent) module.exports = [reverse];
