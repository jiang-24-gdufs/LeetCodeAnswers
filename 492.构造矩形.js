/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  // 求最大的除数
  let m = Math.floor(Math.sqrt(area));

  while(area % m !== 0) { // 不能整除
    m--
  }

  return [Math.floor(area / m), m]
};
// @lc code=end

