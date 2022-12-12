/*** 异位数，字母出现的次数相同*/
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  const resset = new Array(26).fill(0)
  const base = 'a'.charCodeAt()

  for (const i of s) {
    resset[i.charCodeAt() - base] ++
  }
  for (const i of t) {
    if(!resset[i.charCodeAt() - base]) return false
    resset[i.charCodeAt() - base] --
  }
  return true
}