/** */
var combinationSum3 = function(k, n) {
  let path = [], result = []
  const backtrack = function(start) {
    const l = path.length
    if(l === k) {
      const sum = path.reduce((a,b) => a + b)
      if(sum === n) {
        result.push([...path])
      }
      return
    }
    for(let i = start;i<=9 - (k - l)+1;i++) {
      path.push(i)
      backtrack(i+1)
      path.pop()
    }
  }
  backtrack(1)
  return result
}
console.log(combinationSum3(9, 45));