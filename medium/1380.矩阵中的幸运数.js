/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  for (let i = 0, m = matrix.length; i < m; i++) {
    const row = matrix[i];
    const minInRow = Math.min(...row);
    let isMax = true;
    for (let j = 0, n = row.length; j < n; j++) {

      for(let k =  0; k < n; k++) {

        if (minInRow > matrix[k][j]) {
          isMax = true
        } else {
          isMax = false
          break;
        }
      }
    }
    if (isMax) {
      console.log('%c1380.矩阵中的幸运数.js line:25 isMax', 'color: #007acc;', isMax);
      console.log('%c1380.矩阵中的幸运数.js line:25 minInRow', 'color: #007acc;', minInRow);
    }
  }
};
// @lc code=end
