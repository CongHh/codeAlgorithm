/**分发饼干 贪心算法** */

var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)

  let result = 0
  let index = s.length - 1
  for(let i = g.length -1;i>= 0;i--) {
    if(index >= 0 && s[index] >= g[i]) {
      result ++
      index --
    }
  }
  return result
}
g = [1,6,7,10], s= [1,3,5,9]
console.log(findContentChildren(g, s))
