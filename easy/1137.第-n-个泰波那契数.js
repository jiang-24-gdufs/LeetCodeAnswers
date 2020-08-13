/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const init = [0, 1, 1, 2, 4]
  for (let i = 5, l = 37; i <= 37; i++) {
    init.push(init[i-3] + init[i-2] + init[i-1])
  }
  return init[n]
};
// @lc code=end

