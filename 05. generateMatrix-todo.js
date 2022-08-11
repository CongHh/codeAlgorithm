/**
 * 输入: 3 
 * 输出: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
 */

var generateMatrix = function (n) {
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let starx = stary = 0
  let count = 1
  let offset = 1
  let loop = Math.floor(n / 2)
  let mid = Math.floor(n/2)
  while(loop--) {
    let x = starx, y = stary
    for(;y < n-offset; y++) {
      res[x][y] = count++
    }
    for(;x < n -offset;x++) {
      res[x][y] = count++
    }
    for(;y > stary;y--) {
      res[x][y] = count++
    }
    for(;x > starx;x--) {
      res[x][y] = count++
    }
    starx++
    stary++
    offset++
  }
  if(n & 1) {
    res[mid][mid] = count++
  }
  return res
}
var n =3
console.log(generateMatrix(n));