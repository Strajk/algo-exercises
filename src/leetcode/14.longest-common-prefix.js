/*
[14] Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/description/

Write a function to find the
longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example:
Input: ["flower","flow","flight"]
Output: "fl"

Example:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.
*/


/**
 @param {string[]} strs
 @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs[0]) return ""

  let prefix = ""
  for (let i = 0; strs[0].length; i++) { // position
    const letter = strs[0][i]
    if (!strs.every(x => x.charAt(i) === letter)) break
    prefix += letter
  }
  return prefix
}

function alternative(strs) {
  if (!strs[0]) return ""
  for (let i = 0; strs[0].length; i++) { // position
    for (s of strs) {
      if (s[i] !== strs[0][i]) return s.slice(0, i)
    }
  }
}

if (module.parent) module.exports = [longestCommonPrefix, alternative];
