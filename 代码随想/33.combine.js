/***组合问题。 
 * 回溯算法 
 * 递归函数的返回值以及参数
 * 终止条件
 * 单层搜索过程
*/
let path = []
let result = []
var combine = function(n, k) {
  result = []
  combineHelper(n, k, 1)
  return result
}

const combineHelper = function(n, k, startIndex) {
  if(path.length === k) {
    result.push([...path])
    return
  }
  for(let i = startIndex;i<=n - (k - path.length) + 1;i++) {
    path.push(i)
    combineHelper(n, k, i+1)
    path.pop()
  }
}
console.log(combine(4,2));
