/** 电话号码字母匹配*/

var letterCombinations = function(digits) {
  const k = digits.length
  const map = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
  if(!k) return []
  if(k === 1) return map[digits].split('')

  const res = [], path = []
  backtracking(digits, k, 0)
  return res;

  function backtracking(n, k, startIndex) {
    if(path.length === k) {
      res.push(path.join(""))
      return
    }
    for(const v of map[n[startIndex]]) {
      path.push(v)
      backtracking(n, k, startIndex + 1)
      path.pop()
    }
  }
}
console.log(letterCombinations('23'));
