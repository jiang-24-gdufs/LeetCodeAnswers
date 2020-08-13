/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const ans = [];
  for(let i = 0, l = nums.length; i < l; i++) {
    if(i) {
      ans.push(nums[i] + ans[i-1])
    } else {
      ans.push(nums[i])
    }
  }
  return ans
};
// @lc code=end

