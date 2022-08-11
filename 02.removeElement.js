/**
 * 
 给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 
 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素
 */
/* 双指针（快慢指针） */
var removeElement = (nums, val) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k++] = nums[i]
        }
    }
    return k;
};
var nums = [0, 1, 2, 2, 3, 0, 4, 2]
    

var a = removeElement(nums, 2)
console.log(a);