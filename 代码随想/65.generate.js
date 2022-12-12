/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = []
  for (let i = 0; i < numRows; i++) {
    let rows = new Array(i+ 1).fill(1)
    for(let j = 1;j<rows.length-1;j++) {
      rows[j] = res[i-1][j-1] + res[i -1][j]
    }
    res.push(rows)
  }
  return res
};