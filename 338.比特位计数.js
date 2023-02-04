/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
      bits[i] = countOnes(i);
  }
  return bits
};

const countOnes = (x) => {
  let ones = 0;
  while (x > 0) {
      x &= (x - 1);
      ones++;
  }
  return ones;
}
// @lc code=end

