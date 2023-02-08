/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
/* 
'a'.charCodeAt() -> 97
'z'.charCodeAt() -> 122
*/
const rArr = Array(26).fill(0)
const mArr = Array(26).fill(0)
// hash
let i=0,rl=ransomNote.length,
    j=0,ml=magazine.length
while(i<rl) {
  const index = ransomNote[i].charCodeAt() - 97
  rArr[index]+=1
  i++
}
while(j<ml) {
  const index = magazine[j].charCodeAt() - 97
  mArr[index]+=1
  j++
}
// compare, All m[i] >= r[i] 
i=0
while(i<26){
if (mArr[i] < rArr[i]) return false
i++
}
return true
};
// @lc code=end

