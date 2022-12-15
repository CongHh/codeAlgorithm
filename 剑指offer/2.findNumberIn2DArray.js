/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 在一个 n * m 的二维数组中，每一行都按照从左到右 非递减 的顺序排序，每一列都按照从上到下 非递减 的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
var findNumberIn2DArray = function(matrix, target) {
    for (const num of matrix) {
      let index = search(num,target)
      if(index >= 0) return true
    }
    return false
};
const search = (num, target) => {
  let right = 0, left = num.length - 1
  while(right <= left) {
    let mid = right + Math.floor((left - right) / 2)
    if(num[mid] === target) {
      return mid
    } else if(num[mid] > target) {
      left = mid -1
    } else {
      right = mid + 1
    }
  }
  return -1
}