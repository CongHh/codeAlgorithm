/**
 * @param {string} s
 * @return {string}
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 */
var replaceSpace = function(s) {
  // 字符串转为数组
 const strArr = Array.from(s);
 let count = 0;

 // 计算空格数量
 for(let i = 0; i < strArr.length; i++) {
   if (strArr[i] === ' ') {
     count++;
   }
 }

 let left = strArr.length - 1;
 let right = strArr.length + count * 2 - 1;

 while(left >= 0) {
   if (strArr[left] === ' ') {
     strArr[right--] = '0';
     strArr[right--] = '2';
     strArr[right--] = '%';
     left--;
   } else {
     strArr[right--] = strArr[left--];
   }
 }

 // 数组转字符串
 return strArr.join('');
};