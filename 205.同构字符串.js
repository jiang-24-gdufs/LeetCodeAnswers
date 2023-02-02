/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 
var isIsomorphic = function(s, t) {
  const l = t.length
  // 构建映射表
  // map = {}; 
  // p->t, a->i...
  // map.p='t', map.a='i'
  // t的每一位都与表对应
  // 表*2
  const map1 = {}; // s->t
  const map2 = {}; // t->s
  let i = 0;
  let flag = true; // should continue
  while(flag && i < l) {
    const charS = s[i];
    const charT = t[i];
    // map
    if (!map1[charS]) {
      map1[charS] = charT;
    }
    if (!map2[charT]) {
      map2[charT] = charS;
    }

    if (charT !== map1[charS] || charS!== map2[charT]) {
      flag = false;
    }

    i++
  }
  return flag
};
// @lc code=end

