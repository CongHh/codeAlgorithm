/**
 * @param {number} x
 * @return {number}
 */
//给你一个非负整数x，计算并返回x的算术平方根。由于返回类型是整数，结果只保留整数部分，小数部分将被舍去。
 var mySqrt = function(x) {
    if(x < 2) return x
    let left = 1
    let right = Math.floor(x/2)
    while(left <= right) {
      let mid = left + Math.floor((right - left)/2)
      if(mid * mid === x) return mid
      if(mid * mid < x) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return right
};