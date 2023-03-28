/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(obstacleGrid[i][j] === 0) {
        // 不是障碍物
        if(i === 0) {
          obstacleGrid[i][j] = obstacleGrid[i][j-1] ?? 1
        }else if(j === 0) {
          obstacleGrid[i][j] = obstacleGrid[i-1][j] ?? 1
        }else {
          obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
        }
      } else {
        // 如果是障碍物， 则路径为0
        obstacleGrid[i][j] = 0
      }
    }
  }
  return obstacleGrid[m-1][n-1]
};