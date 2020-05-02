/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *  **** 最后一个测试用例超时了
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 暴力解法超时
    const l = nums.length, result = []
    for(let i = 0; i < l; i++) {
        // 计算当前到后面的所有求最大
        let max = nums[i], resultHash = {[i]:nums[i]}
        for(let j = i + 1; j < l; j++) {
            /* 存在重复计算 
            [0, 1] [0,2] ... [0, l-1]
            [1, 2] [1,3] ... [1, l-1]
            ...
            [l-1, l-1]
            */
            let sum = resultHash[j-1] + nums[j]
            if(sum > max) max = sum
            //缓存hash
            resultHash[j] = sum
        }
        result.push(max)
    }
    return Math.max(...result)
};
// @lc code=end

var maxSubArray = function(nums) {
    // 考虑动态规划
    const dp = []
    // 边界状态
    dp[0] = nums[0]

    const l = nums.length
    if(l < 2) return nums[0]
    for(let i = 1; i < l; i++) {
        // 状态转移方程
        dp[i] = Math.max(dp[i -1], 0) + nums[i]
    }

    // 根据状态返回最大的值
    return Math.max.apply(null,dp)
}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])