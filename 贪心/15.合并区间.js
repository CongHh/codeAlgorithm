/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let res = []
  let pre = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    if(cur[0] > pre[1]) {
      res.push(pre)
      pre = cur
    }else {
     pre[1] = Math.max(cur[1], pre[1])
    }
  }
  res.push(pre)
  return res
};