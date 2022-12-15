
/**
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4       
 * 解释: 9 出现在 nums 中并且下标为 4  
*/
/* 左闭右闭 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1
    while(left <= right) {
        let mid = left + Math.floor((right - left)/2)
        if(nums[mid] > target) {
            right = mid -1
        } else if(nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return -1
}

var nums = [-1,0,3,5,9,12], target = 9

var a = search(nums, target)
console.log(a);