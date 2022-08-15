/*** 
 * next 获取i的值，先比较i-1和 j是否相等 ， j是next的值
 * hsy值和nee值对比时 判断到值不同的时候i不动，j移动到前一个next值后再比较
*/
var strStr = function (haystack, needle) {
  if (needle.length === 0)
      return 0;

  const getNext = function(needle) {
    let next = [],j = -1
    next.push(j)
    for(let i = 1;i< needle.length;i++) {
      while(j >=0 && needle[i] !== needle[j+1]){
        j = next[j]
      }
      if(needle[i] === needle[j+1])
      j++
      next.push(j)
    }
    return next
  }

  let next = getNext(needle)
  console.log(next, "====>");
  let j = -1
  for(let i = 0;i< haystack.length;i++) {
    while(j >= 0 && haystack[i] !== needle[j+1]) {
      j = next[j]
    }
    if(haystack[i] === needle[j + 1]) j++
    if(j + 1 === needle.length) 
    return i - needle.length + 1
  }

  return -1;
};

let haystack = "aaabaaabaaaf", needle = "aaabaaaf"

let a = strStr(haystack, needle)
console.log(a);