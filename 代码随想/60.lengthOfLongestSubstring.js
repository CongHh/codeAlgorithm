/**
 * @param {string} s
 * @return {number}
 */
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
var lengthOfLongestSubstring = function (s) {
  const occ = new Set()
  let ans = 0, rk = -1
  for (let i = 0, len = s.length; i < len; i++) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1))
    }
    while (rk + 1 < len && !occ.has(s.charAt(rk + 1))) {
      occ.add(a.charAt(rk + 1))
      rk++
    }
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
};