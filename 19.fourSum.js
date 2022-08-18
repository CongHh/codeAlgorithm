/***四数之和 */

var fourSum = function (nums, target) {
  const len = nums.length
  if (len < 4) return []
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < len - 3; i++) {
    // 去重i
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < len - 2; j++) {
      // 去重j
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let l = j + 1, r = len - 1
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum < target) { l++ }
        else if (sum > target) { r-- }
        else {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          while (l < r && nums[l] === nums[l + 1]) { l++ }
          while (l < r && nums[r] === nums[r - 1]) { r-- }
          l++
          r--
        }
      }
    }
  }
  return res
}

var nums = [1,0,-1,0,-2,2]
console.log(fourSum(nums, 0));