/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 */
let result = [], path = []
var combine = function (n, k) {
  result = []
  combineHelp(n, k, 1)
  return result
};
const combineHelp = function (n, k, startIndex) {
  if (path.length === k) {
    result.push([...path])
    return
  }
  for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
    path.push(i)
    combineHelp(n, k, i + 1)
    path.pop()
  }
}