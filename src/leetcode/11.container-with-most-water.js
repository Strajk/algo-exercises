/*
[11] Container With Most Water
https://leetcode.com/problems/container-with-most-water/description/

Given n non-negative integers a1, a2, ..., an ,
where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two
endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
with x-axis forms a container, such that the container contains the most
water.

Note: You may not slant the container and n is at least 2.

The vertical lines in the picture are represented by array [1,8,6,2,5,4,8,3,7]. In
this case, the max area of water (blue section) the container can contain is
49.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/


/**
 @param {number[]} height
 @return {number}
 */
// Time: O(n) | Space: O(1)
function maxArea(height) {
  let max = 0
  let l = 0
  let r = height.length - 1
  while (l < r) {
    max = Math.max(
      max,
      Math.min(height[l], height[r]) * (r - l)
    )
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return max
}

// Time: O(n^2) | Space: O(1)
function bruteForce(height) {
  let max = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(
        max,
        Math.min(height[i], height[j]) * (j - i)
      )
    }
  }
  return max
}

if (module.parent) module.exports = [ bruteForce, maxArea ];
