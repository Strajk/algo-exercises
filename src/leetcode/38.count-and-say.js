/*
[38] Count and Say
https://leetcode.com/problems/count-and-say/description/

The count-and-say sequence is the
sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the n^th term of the count-and-say sequence.
You can do so recursively, in other words from the previous member read off the digits,
counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.

Example:
Input: 1
Output: "1"
Explanation: This is the base case.

Example:
Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21" in which we have two groups "2" and
"1", "2" can be read as "12" which means frequency = 1 and value = 2, the
same way "1" is read as "11", so the answer is the concatenation of "12" and
"11" which is "1211".
*/

function nextWithFor(x) {
  if (!x) return "1"

  let res = ""
  for (let l = 0; l < x.length;) {
    let count = 1
    let number = x.charAt(l)
    for (let r = l + 1; r <= x.length;) {
      if (x.charAt(r) === number) {
        count++
        r++
      } else {
        res += count.toString() + number
        l = r
        break
      }
    }
  }
  return res
}

function next(x) {
  if (!x) return "1"

  let l = 0
  let r = 1

  let res = ""
  while (l < x.length && r <= x.length) {
    if (x.charAt(l) === x.charAt(r)) {
      r++
    } else {
      res += (r - l).toString() + x.charAt(l)
      l = r
      r = l + 1
    }
  }
  return res
}


/**
 @param {number} n
 @return {string}
 */
function countAndSay(n) {
  let res = ""
  while (n) {
    res = next(res)
    n--
  }
  return res
}

// https://leetcode.com/problems/count-and-say/discuss/642001/Javascript100-runtime-Super-easy-recursive
function match(n) {
  if (n === 1) return "1";
  return countAndSay(n-1)
    .match(/1+|2+|3+/g)
    .reduce((acc, nums) => acc += `${nums.length}${nums[0]}`, '')
}

if (module.parent) module.exports = [ countAndSay, match ];
