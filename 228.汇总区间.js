/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const ret = [];
  let i = 0, l = nums.length;
  while (i < l) {
    const s = i;
    const item = nums[i];
    // 往下循环直到间隔差值>1
    while (nums[i + 1] - nums[i] === 1) {
      i++
    }
    const e = i;
    i++;
    // 构建字符串
    const temp = ['' + nums[s]];
    if (s < e) {
      temp.push('->');
      temp.push('' + nums[e]);
    }
    ret.push(temp.join(''));
  }

  return ret
};
// @lc code=end

