/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 */
var subsetsWithDup = function (nums) {
  let res = [], path = []
  nums.sort((a, b) => a - b)
  backtracking(0)
  return res
  function backtracking(startIndex) {
    res.push([...path])
    if (startIndex > nums.length - 1) return
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) continue
      path.push(nums[i])
      backtracking(i + 1)
      path.pop()
    }
  }
};