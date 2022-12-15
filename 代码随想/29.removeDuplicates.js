/** */
 var removeDuplicates = function(s) {
    const stack = []
    for(const x of s) { // abbaca
      let c = null
      if(stack.length && x === (c = stack.pop())) continue
      c && stack.push(c)
      stack.push(x)
    }
    return stack.join("")
 }
 removeDuplicates('abbaca')