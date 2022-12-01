/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 var addBinary = function(a, b) {
    // 返回数组
    let res = []
    // 进位
    let c = 0
    let [i, j] = [a.length - 1, b.length - 1]
    while (i >= 0 || j >= 0 || c) {
      // 获取指针指向的数字
      let aa = +a[i] ? +a[i] : 0
      let bb = +b[j] ? +b[j] : 0
      // 计算sum
      let sum = aa + bb + c
      if(sum >= 2) {
        sum -= 2
        c = 1
      } else {
        c = 0
      }
      res.unshift(sum)
      i --
      j --
    }
    return res.join('')
};

console.log(addBinary('11', '1'));