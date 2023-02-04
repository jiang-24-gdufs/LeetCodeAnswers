/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
// 1. 二进制表示， 4: 100，16:10000，64: 1000000, ...
// 2. 若为4的幂必为2的幂 n&(n-1) === 0
// 3. 4的幂，1的位置为，3，5，7，9... 奇数位


/* 
构造一个整数 
mask
mask，它的所有偶数二进制位都是 
0，所有奇数二进制位都是 
1。这样一来，我们将 
n 和 
mask 进行按位与运算，如果结果为 
0，说明 
n 二进制表示中的 
1 出现在偶数的位置，否则说明其出现在奇数的位置。

根据上面的思路，
mask 的二进制表示为：
mask=(10101010101010101010101010101010)2
*/
return n>0&&(n&(n-1))===0&&(n&0xaaaaaaaa)===0
};

// copy 
// link: https://leetcode.cn/problems/power-of-four/solution/4de-mi-by-leetcode-solution-b3ya/#:~:text=Python-,%E5%89%8D%E8%A8%80,-%E5%A6%82%E6%9E%9C
var isPowerOfFour2 = function(n) {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
};
// @lc code=end

