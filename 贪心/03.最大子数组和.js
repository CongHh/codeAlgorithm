/**
 * @param {number[]} nums
 * @return {number}
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），
 * 返回其最大和。子数组 是数组中的一个连续部分。
 */
var maxSubArray = function(nums) {
  let result = -Infinity
  let sum = 0
  for(let i = 0;i<nums.length;i++) {
    sum += nums[i]
    if(sum > result) result = sum
    if(sum < 0) sum = 0
  }
  return result
};