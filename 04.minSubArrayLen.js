/**
 * 输入：s = 7, nums = [2,3,1,2,4,3] 
 * 输出：2 
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组
 */

var minSubArrayLen = function (target, nums) {
  let n = nums.length
  let l = r = sum = 0
  let res = n + 1
  while (r < n) {
    sum += nums[r++]
    while (sum >= target) {
      res = res < r - l ? res : r - l
      sum -= nums[l++]
    }
  }

  return res > n ? 0 : res
}
var target = 11, nums = [2,3,1,2,4,3]
console.log(minSubArrayLen(target, nums));