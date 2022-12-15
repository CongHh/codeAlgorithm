/**
 * @param {number} columnNumber
 * @return {string}
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
 */
 var convertToTitle = function(columnNumber) {
  const sb = [];
  while (columnNumber !== 0) {
      columnNumber--;
      sb.push(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt()));
      columnNumber = Math.floor(columnNumber / 26);
  }
  return sb.reverse().join('');
};