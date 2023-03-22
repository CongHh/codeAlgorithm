/**
 * @param {number} n
 * @return {number}
 * 当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。
 * 给定一个整数 n ，返回 小于或等于 n 的最大数字，且数字呈 单调递增 。
 */
var monotoneIncreasingDigits = function(n) {
  n = n.toString()
  n = n.split('').map(item => {
    return +item
  })
  let flag = Infinity
  for(let i = n.length - 1;i>0;i--) {
    if(n[i-1] > n[i]) {
      flag = i
      n[i-1] = n[i-1] - 1
    }
  }
  for(let i = flag;i<n.length;i++) {
    n[i] = 9
  }
  n = n.join('')
  console.log(n);
  return +n
};
monotoneIncreasingDigits(332)