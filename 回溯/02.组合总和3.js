/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 说明：
 * 所有数字都是正整数。
 * 解集不能包含重复的组合。
 * 示例 1: 输入: k = 3, n = 7 输出: [[1,2,4]]
 * 示例 2: 输入: k = 3, n = 9 输出: [[1,2,6], [1,3,5], [2,3,4]]
 */

var combinationSum3 = function (k, n) {
  let path = [], result = [], sum = 0
  const combineHelper = function (path, index) {
    // 剪枝操作
    if (sum > n) {
      return
    }
    if (path.length === k) {
      if (sum === n) {
        result.push([...path])
        return
      }
    }
    for (let i = index; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i)
      sum += i
      index += 1
      combineHelper(path, index)
      sum -= i
      path.pop()
    }
  }
  combineHelper(path, 1)
  return result
};