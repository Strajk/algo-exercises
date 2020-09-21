/*
[1] Two Sum
https://leetcode.com/problems/two-sum/description/

Given an array of integers nums
and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may
not use the same element twice.

You can return the answer in any order.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.
*/

/**
 @param {number[]} nums
 @param {number} target
 @return {number[]}
 */
function naive(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) return [i, j]
    }
  }
}

function twoSum(nums, target) {
  const indexed = []
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    const remainder = target - val
    if (indexed[remainder] !== undefined) return [indexed[remainder], i]
    indexed[val] = i
  }
}

if (module.parent) module.exports = [naive, twoSum];
