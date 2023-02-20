/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // 遍历每一格陆地
  // 统计4边不为陆地的格
  // 边界（如果陆地贴边则默认加1）
  let res = 0
  const row = grid.length;
  const col = grid[0].length;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {

      if (grid[i][j] === 1) {
        // 计算4边水（边界）的数量

        // 4边
        let edge = 0
        for (let k = 0; k < 4; ++k) {
          let tx = i + dx[k];
          let ty = j + dy[k];
          if (tx < 0 || tx >= row || ty < 0 || ty >= col || !grid[tx][ty]) {
            res += 1;
          }
        }

      }

    }
  }

  return res;

};
// @lc code=end

