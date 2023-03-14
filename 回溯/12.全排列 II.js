/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 */
var permuteUnique = function(nums) {
  let res = [], path = []
  nums.sort((a, b) => a -b)
  backtracking([])
  return res
  function backtracking(useSet) {
    if(path.length === nums.length) {
      res.push([...path])
      return
    }
    for(let i = 0;i<nums.length;i++) {
      if(i > 0 && nums[i] === nums[i -1] && !useSet[i - 1]) continue
      if(!useSet[i]) {
        useSet[i] = true
        path.push(nums[i])
        backtracking(useSet)
        path.pop()
        useSet[i] = false
      }
    }
  }
};