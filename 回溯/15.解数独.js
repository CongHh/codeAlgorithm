/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 编写一个程序，通过填充空格来解决数独问题。
 * 数独的解法需 遵循如下规则：
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次
 * 数独部分空格内已填入了数字，空白格用 '.' 表示
 */
var solveSudoku = function (board) {
  const isValid = (row, col, val, board) => {
    const len = board.length
    for (let i = 0; i < len; i++) {
      if (board[row][i] === val)
        return false
    }
    for (let i = 0; i < len; i++) {
      if (board[i][col] === val)
        return false
    }
    const startRow = Math.floor(row / 3) * 3
    const startCol = Math.floor(col / 3) * 3
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; i < startCol + 3; i++) {
        if (board[i][j] === val) return false
      }
    }
    return true
  }
  const backtracking = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; i++) {
        if (board[i][j] !== '.') continue
        for (let val = 1; val <= 9; val++) {
          if(isValid(i,j,`${val}`,board)) {
            board[i][j] = `${val}`
            if(backtracking()) {
              return true
            }
            board[i][j] = `.`
          }
        }
        return false
      }
    }
    return true
  }
  backtracking(board)
  return board
};