/***给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。
    如果剩余字符少于 k 个，则将剩余字符全部反转。
    如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
*/
var reverseStr = function(s, k) {
  let len = s.length
  const strArr = s.split('')
  for(let i = 0;i< len;i += 2 * k) {
    let l = i, r = i + k - 1> len ? len : i + k - 1
    while(l < r) {
      [strArr[l], strArr[r]] = [strArr[r], strArr[l]]
      l++
      r--
    }
  }
  return strArr.join('')
}