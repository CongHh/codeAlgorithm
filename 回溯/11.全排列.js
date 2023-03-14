/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */
var permute = function(nums) {
  let res = [], path = []
  backtracking([])
  return res
  function backtracking(useSet) {
    if(path.length === nums.length) {
      res.push([...path])
      return
    }
    for(let i = 0;i<nums.length;i++) {
      if(useSet[nums[i]]) continue
      path.push(nums[i])
      useSet[nums[i]] = true
      backtracking(useSet)
      path.pop()
      useSet[nums[i]] = false
    }
  }
};