/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
 * 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 
 * 重复这个过程恰好 k 次。可以多次选择同一个下标 i 
 * 以这种方式修改数组后，返回数组 可能的最大和 
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    for(let i = 0;i<nums.length;i++) {
      if(nums[i]<0 && k>0) {
        nums[i] = -nums[i]
        k--
      }
    }
    while(k>0) {
      nums[nums.length -1] = -nums[nums.length -1]
      k--
    }
    return nums.reduce((a,b) => {
      a+b
    })
};