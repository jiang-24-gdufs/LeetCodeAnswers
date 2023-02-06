/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  /* 
因此我们只要求出所有数字数量最大公约数 g
判断 g 是否大于等于 2 即可，如果大于等于 2，则满足条件，否则不满足。
*/
  // 拆解: 统计所有数字出现的次数 + 求次数的最大公约数
  const gcd = (x, y) => {
    return x == 0 ? y : gcd(y % x, x);
  };

  let counts = [];
  deck.forEach(num=>{
    if (counts[num]) {
      counts[num]++

    } else {
      counts[num] =1
    }
  })
  let l=counts.length,result;
  counts = counts.filter(Boolean)
  for(let i=0; i<l-1;i++) {
    result =gcd(counts[i],counts[i+1])
  }

  return result >= 2
};
// @lc code=end
