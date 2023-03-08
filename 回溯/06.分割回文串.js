/**
 * @param {string} s
 * @return {string[][]}
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 回文串 是正着读和反着读都一样的字符串。
 */
const isPalindrome = function (s, l, r) {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false
  }
  return true
}
var partition = function (s) {
  let res = [], path = []
  backtracking(0)
  return res
  function backtracking(startIndex) {
    if (startIndex >= s.length) {
      res.push([...path])
      return
    }
    for (let i = startIndex; i < s.length; i++) {
      if(!isPalindrome(s, startIndex, i)) continue
      path.push(s.slice(startIndex, i + 1))
      backtracking(i+ 1)
      path.pop()
    }
  }
};