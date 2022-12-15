/**
 * @param {string} columnTitle
 * @return {number}
 * 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。
 */
var titleToNumber = function (columnTitle) {
  let number = 0;
  let multiple = 1;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const k = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1;
    number += k * multiple;
    multiple *= 26;
  }
  return number;
};