/**
 * @param {number[][]} intervals
 * @return {number}
 * 给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。
 * 返回 需要移除区间的最小数量，使剩余区间互不重叠 。
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let res = 1
    let end = intervals[intervals.length - 1][0]
    for(let i = intervals.length - 2;i>=0;i--) {
      if(intervals[i][1] <= end) {
        res ++
        end = intervals[i][0]
      }
    }
    return intervals.length - res
};