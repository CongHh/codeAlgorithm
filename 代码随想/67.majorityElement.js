/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */
 var majorityElement = function(nums) {
  let len = nums.length, count = len / 2
  if(len === 1) {
    return nums[0]
  }
  let result = new Map()
  for(let i = 0; i< len;i++) {
    if(result.get(nums[i])) {
      
      result.set(nums[i], result.get(nums[i])+1)
      if(result.get(nums[i]) > count) {
        return nums[i]
      }
    }else {
      result.set(nums[i], 1)
    }
  }
};
console.log(majorityElement([1]));