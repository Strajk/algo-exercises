/*
[22] Generate Parentheses

https://leetcode.com/problems/generate-parentheses/description/

algorithms
Medium (63.36%)
Total Accepted:    603K
Total Submissions: 950.9K
Testcase Example:  '3'

Given n pairs of parentheses, write a function to generate all combinations
of well-formed parentheses.

For example, given n = 3, a solution set is:

[
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
]

*/

/**
@param {number} n
@return {string[]}
*/
// https://leetcode.com/problems/generate-parentheses/discuss/139455/Clean-JavaScript-backtracking-solution
function generateParenthesis(n) {
  const res = [];

  // l: left remaining
  // r: right remaining
  function go(l, r, s) {
    if (l > r) return;  // The number of '(' should be always >= ')'
    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l) go(l - 1, r    , s + '(');
    if (r) go(l,     r - 1, s + ')');
  }

  go(n, n, '');
  return res;
}

function generateParenthesis2 (n) {
  const gen = (canOpen, currentString, canClose) => {
    let all = [];
    if (canOpen === 0 && canClose === 0) return [currentString];
    if (canOpen > 0) {
      all = [...all, ...gen(canOpen - 1, currentString + '(', canClose + 1)];
    }
    if (canClose > 0) {
      all = [...all, ...gen(canOpen, currentString + ')', canClose - 1)];
    }
    return all;
  }
  return gen(n, '', 0);
}

if (module.parent) module.exports = [ generateParenthesis, generateParenthesis2 ];
