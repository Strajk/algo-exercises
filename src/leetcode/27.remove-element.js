/*
[27] Remove Element
https://leetcode.com/problems/remove-element/description/

Given an array nums and a value val, remove all instances of that value
in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying
the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave
beyond the new length.

Example:
Given nums = [3,2,2,3], val = 3,
Your function should return length = 2, with the first two elements of nums
being 2.

It doesn't matter what you leave beyond the returned length.

Example:
Given nums = [0,1,2,2,3,0,4,2], val = 2,
Your function should return length = 5, with the first five elements of nums
containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means
modification to the input array will be known to the caller as well.
*/

/**
 @param {number[]} nums
 @param {number} val
 @return {number}
 */
function removeElement(nums, val) {
  let ref = 0
  for (let x of nums) {
    if (x === val) continue
    nums[ref] = x
    ref++
  }
  return ref
}

if (module.parent) module.exports = [removeElement];
