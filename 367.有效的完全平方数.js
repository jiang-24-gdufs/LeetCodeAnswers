/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
// 从1开始乘直到>=num
let i = 1, m = 1
while(m<num) {
  m = i*i;
  i++
}
return m === num
};
// @lc code=end

