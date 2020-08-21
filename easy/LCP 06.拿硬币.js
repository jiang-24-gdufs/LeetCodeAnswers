/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
  let i = coins.length - 1, ans = 0
  while(i >= 0) {
      const isEvent = coins[i] % 2  === 0;
      ans += isEvent ? coins[i] / 2 : (coins[i] + 1) / 2
      i --
  }
  return ans
};