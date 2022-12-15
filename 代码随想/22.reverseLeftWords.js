/** */
var reverseLeftWords = function(s, n) {
  let len = s.len
  let i = 0
  while(i < len -n) {
    s = s[len -1] + s
    i++
  }
  return s.slice(0, len)
}