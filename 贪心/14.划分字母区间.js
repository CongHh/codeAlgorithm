/**
 * @param {string} s
 * @return {number[]}
 * 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
 * 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。
 * 返回一个表示每个字符串片段的长度的列表。
 */
var partitionLabels = function (s) {
  let hash = {}
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i
  }
  let left = 0,right = 0, res = []
  for(let i = 0;i<s.length;i++) {
    right = Math.max(right, hash[s[i]])
    if(i === right) {
      res.push(right-left + 1)
      left = i + 1
    }
  }
  return res
};