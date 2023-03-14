/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */
var subsets = function(nums) {
  let res = [], path = []
  backtracking(0)
  return res
  function backtracking(startIndex) {
    res.push([...path])
    for(let i = startIndex;i<nums.length;i++) {
      path.push(nums[i])
      backtracking(i+1)
      path.pop()
    }
  }
};