/** 数组的交集*/
var intersection = function(num1, num2) {
  if(num1.length < num2.length) {
    const _ = num1
    num1 = num2
    num2 = _
  }
  const num1Set = new Set(num1)
  const resSet = new Set()
  for (let i = 0; i < num2.length; i++) {
    num1Set.has(num2[i]) && resSet.add(num2[i]) 
  }
  return Array.from(resSet)
}