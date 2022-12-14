/**
 * @param {number} n
 * @return {number}
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。
 * 求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 */
var numWays = function (n) {
  if (n === 0) return 1
  if (n <= 2) return n
  let p = 1, q = 2
  for (let i = 3; i <= n; i++) {
    let t = p + q
    p = q
    q = t % 1000000007
  }
  return q
};