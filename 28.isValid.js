/** */
var isValid = function(s) {
  const stack = [], 
  map = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  for(let i = 0;i< s.length;i++) {
    if(s[i] in map) {
        stack.push(s[i])
        continue
    }
    if(map[stack.pop()] !== s[i]) return false
  }

  return !stack.length
};
console.log(isValid('()'));

