/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbolValus = new Map()
  symbolValus.set('I', 1)
  symbolValus.set('V', 5)
  symbolValus.set('X', 10)
  symbolValus.set('L', 50)
  symbolValus.set('C', 100)
  symbolValus.set('D', 500)
  symbolValus.set('M', 1000)
  let ans = 0
  for (let i = 0, len = s.length; i < len; i++) {
    const value = symbolValus.get(s[i])
    if (i < len - 1 && value < symbolValus.get(s[i + 1])) {
      ans -= value
    } else {
      ans += value
    }
  }
  return ans
};
console.log(romanToInt('XIV'));