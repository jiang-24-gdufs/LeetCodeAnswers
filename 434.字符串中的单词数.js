/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let segmentCount = 0;
//该下标对应的字符不为空格；
//该下标为初始下标或者该下标的前下标对应的字符为空格；
  for (let i = 0; i < s.length; i++) {
      if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') {
          segmentCount++;
      }
  }

  return segmentCount;
};
// @lc code=end

