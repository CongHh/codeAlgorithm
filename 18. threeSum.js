/***三数之和 */
var threeSum = function (nums) {
  const res = [], len = nums.length
  // 排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    let l = i + 1, r = len - 1, iNum = nums[i]
    if (iNum > 0) return res
    // 去重
    if (nums[i] === nums[i - 1]) continue
    while (l < r) {
      let lNum = nums[l], rNum = nums[r], threeSum = iNum + lNum + rNum
      if (threeSum > 0) {
        r--
      } else if (threeSum < 0) {
        l++
      } else {
        res.push([iNum, lNum, rNum])
        // 去重
        while(l<r && nums[l] === nums[l+1]) {
          l++
        }
        while(l<r && nums[r] === nums[r-1]){
          r--
        }
        l++
        r--
      }
    }
  }
  return res
}
