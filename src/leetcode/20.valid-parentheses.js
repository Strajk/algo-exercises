/*
[20] Valid Parentheses
https://leetcode.com/problems/valid-parentheses/description/

Given a string s containing just the characters
'(', ')',
'{', '}',
'[' and ']',
determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example:
Input: s = "()"
Output: true

Example:
Input: s = "()[]{}"
Output: true

Example:
Input: s = "(]"
Output: false

Example:
Input: s = "([)]"
Output: false

Example:
Input: s = "{[]}"
Output: true

Constraints:
1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.
*/

/**
 @param {string} s
 @return {boolean}
 */
function isValid(s) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const stack = [];
  for (const x of s) {
    if (map[x]) {
      stack.push(map[x]);
    } else {
      if (x !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
}


function chatty(s) {
  const rtl = {
    ")": "(",
    "]": "[",
    "}": "{"
  }
  const counters = {
    "(": 0,
    "[": 0,
    "{": 0
  }
  let recent = []
  for (const x of s) {
    switch (x) {
      case "(":
      case "[":
      case "{":
        counters[x]++
        recent.unshift(x)
        break
      case ")":
      case "]":
      case "}":
        const left = rtl[x]
        if (recent[0] !== left) return false
        counters[left]--
        recent.shift()
        break
    }
  }
  return Object.values(counters).every(x => x === 0)
}

if (module.parent) module.exports = [isValid, chatty];
