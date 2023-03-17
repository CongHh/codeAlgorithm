/**
 * @param {number} n
 * @return {string[][]}
 */

const solveNQueens = (n) => {
  const board = new Array(n);
  for (let i = 0; i < n; i++) {     // 棋盘的初始化
    board[i] = new Array(n).fill('.');
  }
  const res = [];
  const isValid = (row, col) => {  
    for (let i = 0; i < row; i++) { // 之前的行
      for (let j = 0; j < n; j++) { // 所有的列
        if (board[i][j] == 'Q' &&   // 发现了皇后，并且和自己同列/对角线
          (j == col || i + j === row + col || i - j === row - col)) {
          return false;             // 不是合法的选择
        }
      }
    }
    return true;
  };
  const helper = (row) => {   // 放置当前行的皇后
    if (row == n) {           // 递归的出口，超出了最后一行
      const stringsBoard = board.slice(); // 拷贝一份board
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join(''); // 将每一行拼成字符串
      }
      res.push(stringsBoard); // 推入res数组
      return;
    }
    for (let col = 0; col < n; col++) { // 枚举出所有选择
      if (isValid(row, col)) {          // 剪掉无效的选择
        board[row][col] = "Q";          // 作出选择，放置皇后
        helper(row + 1);                // 继续选择，往下递归
        board[row][col] = '.';          // 撤销当前选择
      }
    }
  };
  helper(0);  // 从第0行开始放置
  return res;
};


const solveNQueens1 = (n) => {
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }

  const cols = new Set();  // 列集，记录出现过皇后的列
  const diag1 = new Set(); // 正对角线集
  const diag2 = new Set(); // 反对角线集
  const res = [];

  const helper = (row) => {
    if (row == n) {
      const stringsBoard = board.slice();
      for (let i = 0; i < n; i++) {
        stringsBoard[i] = stringsBoard[i].join('');
      }
      res.push(stringsBoard);
      return;
    }
    for (let col = 0; col < n; col++) {
      // 如果当前点的所在的列，所在的对角线都没有皇后，即可选择，否则，跳过
      if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) { 
        board[row][col] = 'Q';  // 放置皇后
        cols.add(col);          // 记录放了皇后的列
        diag2.add(row - col);   // 记录放了皇后的正对角线
        diag1.add(row + col);   // 记录放了皇后的负对角线
        helper(row + 1);
        board[row][col] = '.';  // 撤销该点的皇后
        cols.delete(col);       // 对应的记录也删一下
        diag2.delete(row - col);
        diag1.delete(row + col);
      }
    }
  };
  helper(0);
  return res;
};