/*
[9] Palindrome Number
https://leetcode.com/problems/palindrome-number/description/

Determine whether an integer is a palindrome.
An integer is a palindrome when it reads the same backward as forward.

Example:
Input: 121
Output: true

Example:
Input: -121
Output: false
Explanation: From left to right, it reads -121.
From right to left, it becomes 121-. Therefore it is not a palindrome.

Example:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a
palindrome.

Follow up:
Could you solve it without converting the integer to a string?
*/


/**
 @param {number} x
 @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0) return false

  let reversed = 0
  let copy = x
  while (copy > 0) {
    const lastDigit = copy % 10
    reversed = (reversed * 10) + lastDigit
    const withoutLastDigit = Math.floor(copy / 10)
    copy = withoutLastDigit
  }

  return x === reversed
}

if (module.parent) module.exports = [isPalindrome];
