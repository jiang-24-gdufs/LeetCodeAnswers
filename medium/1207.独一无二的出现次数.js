/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const hashTable = {};
  for(let i = 0 ,l = arr.length; i<l; i++) {
    const num = arr[i];
    if (hashTable[num] === undefined) {
      hashTable[num] = 1
    } else {
      hashTable[num] += 1
    }
  }

  const occurs = Object.values(hashTable)
  occurs.length === new Set(occurs).size
};
// @lc code=end

