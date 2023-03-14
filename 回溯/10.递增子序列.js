/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
 * 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
 */
var findSubsequences = function(nums) {
  let res = [], path = []
  backtracking(0)
  return res
  function backtracking (startIndex) {
    if(path.length > 1) {
      res.push([...path])
    }
    let useSet = []
    for(let i = startIndex;i< nums.length;i++) {
      const n = nums[startIndex]
      if(path.length>0 && nums[i] < path[path.length -1] || useSet[nums[i] + 100]) {
        continue
      }
      useSet[nums[i] + 100] = true
      path.push(nums[i])
      backtracking(i+1)
      path.pop()
    }
  }
};