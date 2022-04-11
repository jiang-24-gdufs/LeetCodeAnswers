/*
 * @Author: jiangh<jiangh@southzn.com>
 * @Date: 2021-07-05 09:41:31
 * @LastEditors: jiangh<jiangh@southzn.com>
 * @LastEditTime: 2021-07-05 09:52:14
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  /* 
  * 数学思路, 去重后求和做差, 差值为重复的值
  * 等差数列减去去重后的和, 差值为丢失的值 
  */

  const getSum = arr =>arr.reduce((a,b)=>a+b);
  const unique = arr =>Array.from(new Set(arr));
  const uniqueSum = getSum(unique(nums));

  const repeatNum = getSum(nums) - uniqueSum;
  
  const l = nums.length;
  const missNum = (1+l)*l/2 - uniqueSum;

  return [repeatNum, missNum]

};
// @lc code=end

