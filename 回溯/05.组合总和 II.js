/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 * 注意：解集不能包含重复的组合。 
 */
var combinationSum2 = function(candidates, target) {
  let res = [], path = []
  candidates.sort((a, b) => a - b)
  backtracking(0, 0)
  return res
  function backtracking (j, sum) {
    if(sum === target) {
      res.push([...path])
      return
    }
    for(let i=j;i<candidates.length;i++) {
      const n = candidates[i]
      if(i > j && candidates[i] === candidates[i -1]) continue
      if(n > target -sum) break
      path.push(n)
      sum += n
      backtracking(i+1, sum)
      path.pop()
      sum -= n
    }
  }
};