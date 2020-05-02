/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 var lengthOfLIS = function(nums) {
     // 动态规划 
     // dp[i] = 当前 i 位的最长上升子序列
     dp = []
     // 初始 dp[0] = 1
 
     // 状态转移方程
     dp[i] = {
         nums[i] 大于 nums[0] ~ nums[i-1] => Math.max[ dp[0], ...dp[i-1] ] + 1
         nums[i] 最小 = 1
     } 
 
     // 结果
     Math.max[dp]
     // 时间复杂度 n^2
     // 空间复杂度 n  
 };
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let i = 1, l = nums.length
    if(l === 0) return 0
    const dp = []
    dp[0] = 1

    for (; i < l; i++) {
        let dpj = []
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) dpj.push(dp[j])
        }
        if(dpj.length > 0) {
            dp[i] = Math.max.apply(null, dpj) +1
        }else{
            dp[i] = 1
        }
    }
    return Math.max.apply(null, dp)
};
// @lc code=end

