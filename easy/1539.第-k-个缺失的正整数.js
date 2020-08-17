/*
 * @lc app=leetcode.cn id=1539 lang=javascript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  const l = arr.length
  const allNums = Array(1000+l).fill(0).map((v, i)=>i+1)
  for(let i = l - 1; i >= 0; i--) {
    allNums.splice(arr[i]-1, 1)
  }
  return allNums[k-1]
};
// @lc code=end

