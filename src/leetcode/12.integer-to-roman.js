/*
[12] Integer to Roman
https://leetcode.com/problems/integer-to-roman/description/

Roman numerals are represented by seven different symbols:
I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added
together. Twelve is written as, XII, which is simply X + II. The number
twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is
written as IV. Because the one is before the five we subtract it making
four. The same principle applies to the number nine, which is written as IX.
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.
Input is guaranteed to be within the range from 1 to 3999.

Example:
Input: 3
Output: "III"

Example:
Input: 4
Output: "IV"

Example:
Input: 9
Output: "IX"

Example:
Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Example:
Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

// https://leetcode.com/problems/integer-to-roman/discuss/706945/Javascript-or-Commented-or-O(1)
function intToRoman(num) {
  let integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let res = ""
  let pointer = 0
  while (num > 0) {
    if (num >= integer[pointer]) {
      res += roman[pointer]
      num -= integer[pointer]
    } else {
      pointer++
    }
  }
  return res
}

// https://leetcode.com/problems/integer-to-roman/discuss/401764/Clean-javascript-solution-using-map
function expandedWithMap(num) {
  const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

  let res = ''
  Object.entries(map).forEach(([letter, n]) => {
    res += letter.repeat(Math.floor(num / n));
    num %= n;
  });
  return res;
}

// https://leetcode.com/problems/integer-to-roman/discuss/389923/Faster-than-98.6-Javascript
function chatty(num) {
  let digit, r = '';

  function convert(digit, tens, fives, ones) {
    if (digit === 9) {
      r = r.concat(ones + tens);
    } else if (digit > 5) {
      r = r.concat(fives + ones.repeat(digit % 5));
    } else if (digit === 5) {
      r = r.concat(fives);
    } else if (digit === 4) {
      r = r.concat(ones + fives);
    } else if (digit > 0) {
      r = r.concat(ones.repeat(digit))
    }
  }

  if(num > 999) { convert(Math.floor(num/1000), '', '', 'M');
    num = Math.floor(num%1000);
  }
  if(num > 99) { convert(Math.floor(num/100), 'M', 'D', 'C');
    num = Math.floor(num%100);
  }
  if(num > 9) { convert(Math.floor(num/10), 'C', 'L', 'X');
    num = Math.floor(num%10);
  }
  convert(num, 'X', 'V', 'I');
  return r;
}

// https://leetcode.com/problems/integer-to-roman/discuss/836386/javascript-easy-understand-solution-beats-97-which-can-expand-to-longer-number
function iffy(num) {
  let result = '';
  const units = [1000, 500, 100, 50, 10, 5, 1];
  const signals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const unitsCount = units.length;
  for (let i = 0; i < unitsCount; i+=2) {
    result += signals[i].repeat(Math.floor(num / units[i]));
    num %= units[i];
    if (i + 2 < unitsCount) {
      if (num >= units[i] - units[i + 2]) {
        result += signals[i + 2] + signals[i];
        num -= units[i] - units[i + 2];
      }
      if (num >= units[i + 1]) {
        result += signals[i + 1];
        num -= units[i + 1];
      }
      if (num >= units[i + 1] - units[i + 2]) {
        result += signals[i + 2] + signals[i + 1];
        num -= units[i + 1] - units[i + 2];
      }
    }
  }

  return result;
}

if (module.parent) module.exports = [ intToRoman, expandedWithMap, chatty, iffy ];
