/** */
var canConstruct = function (ransomNote, magazine) {
  const strArr = new Array(26).fill(0)
  const base = "a".charCodeAt()
  for(const s of magazine) {
    strArr[s.charCodeAt() - base] ++
  }

  for(const s of ransomNote) {
    if(!strArr[s.charCodeAt]- base) return false
    strArr[s.charCodeAt - base] --
  }

  return true
} 