/*
[3] Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

Given a string s,
find the length of the longest substring without repeating characters.

Example:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example:
Input: s = ""
Output: 0

Constraints:
0 <= s.length <= 5 * 10^4
s consists of English letters, digits, symbols and spaces.
*/


/**
 @param {string} s
 @return {number}
 */
function lengthOfLongestSubstring(s) {
  let max = 0
  let sub = new Set()

  let l = 0 // left
  let r = 0 // right

  while (r < s.length) {
    if (sub.has(s.charAt(r))) {
      sub.delete(s.charAt(l))
      l++
    } else {
      sub.add(s.charAt(r))
      if (sub.size > max) max = sub.size
      r++
    }
  }

  return max
}

if (module.parent) module.exports = [lengthOfLongestSubstring];
