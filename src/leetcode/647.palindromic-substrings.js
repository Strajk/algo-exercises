/*
[647] Palindromic Substrings
https://leetcode.com/problems/palindromic-substrings/description/

Given a string, your task is to
count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as
different substrings even they consist of same characters.

Example:
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example:
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Note:
The input string length won't exceed 1000.
*/


/**
 @param {string} s
 @return {number}
 */
function countSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    expand(i, i) // odd length
    expand(i, i + 1) // even length
  }
  return count

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++
      l--
      r++
    }
  }
}

function alternative(s) {
  let count = 0
  for (let r = s.length; r > 0; r--) {
    for (let l = 0; l <= s.length - r; l++) {
      let sub = Array.from(s.substr(l, r));
      if (sub.every((x, i) => {
        let mirrored = sub[sub.length - 1 - i];
        return x === mirrored;
      })) count++;
    }
  }
  return count;
}

if (module.parent) module.exports = [countSubstrings, alternative];
