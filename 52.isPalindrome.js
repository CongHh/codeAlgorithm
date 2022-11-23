/**
 * @param {number} x
 * @return {boolean}
 */
//  var isPalindrome = function(x) {
//     let numAry = x.toString().split('')
//     for(let i=0,len = numAry.length;i<= len/2;i++) {
//       if(numAry[i] != numAry[len -i -1 ]) return console.log('false');
//     }
//     return console.log('true');
// };
var isPalindrome = function(x) {
  // 处理边界问题 
  // 负数、0、末位是0的都不是
  if(x < 0 || (x !== 0 && x % 10 === 0)) {
    return false
  }
  // 反转一半的数对比
  let revertedNumber = 0
  // 当小于或等于反转的数时，达到一半
  while(x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return x === revertedNumber || x === Math.floor(revertedNumber / 10)
};
console.log(isPalindrome(12221));
