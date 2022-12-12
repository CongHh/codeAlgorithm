/**
 * 输入：nums = [-4,-1,0,3,10] 
 * 输出：[0,1,9,16,100] 
 * 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
 */
var sortedSquares = function (nums) {
    let left = 0, right = nums.length - 1,n = nums.length -1
    let res = new Array(n).fill(0)
    while (left <= right) {  
        let l = nums[left] * nums[left]
        let r = nums[right] * nums[right]
        if(l < r) {
            res[n] = nums[right] * nums[right]   
            right--
        }else {
            res[n] = nums[left] * nums[left]
            left++
        }
        n--
    }
    return res
}
var nums =  [-7,-3,2,3,11]
console.log(sortedSquares(nums));
