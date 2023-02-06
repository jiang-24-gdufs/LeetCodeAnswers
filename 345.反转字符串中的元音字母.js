/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const res = s.split('')
  const vols = 'aeiouAEIOU'.split('')
  const isVol = v => vols.includes(v)

  let i = 0, l = s.length, j = l - 1
  while(i < j) {
    // i 往后移动直到isVol
    while(i<j && !isVol(s[i])) {i++}
    while(j>0 && !isVol(s[j])) {j--}

    // 交换
    if (i < j) swap(res,i,j),i++,j--
  }
  return res.join('')
};

function swap(s,i,j) {
  const t = s[i]
  s[i] = s[j]
  s[j] = t
}
// @lc code=end

