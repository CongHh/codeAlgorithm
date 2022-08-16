/** */

var wiggleMaxLength = function(nums) {
  if(nums.length <= 1) return nums.length
  let result = 1, prediff = 0, curdiff = 0
  for(let i = 0;i < nums.length - 1;i++) {
    curdiff = nums[i+1] - nums[i]
    if((curdiff > 0 && prediff <= 0) || (curdiff < 0 && prediff >= 0)) {
      result ++
      prediff = curdiff
    }
  }
  return result
}