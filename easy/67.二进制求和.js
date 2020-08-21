/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 思路是拆分成数字数组, 构成两个等长的数组
    // 从末位逐位相加, 不够补零
    // 相加结果存储在 N + 1 的数组中, N 为a,b中较长的字符串长度
    // 处理相加结果: 从末尾开始如果是2, 则标记进位 carry (单次处理最大的值的 2 + 1(进位))
    // 拼接成字符串
    const aL = a.length; 
    const bL = b.length; 
    const N = Math.max(aL, bL) + 1;
    const aTmp = a.split('');
    const bTmp = b.split('');
    // fill 填充
    const aArr = Array(N - aL).fill(0).concat(aTmp);
    const bArr = Array(N - bL).fill(0).concat(bTmp);
    const ansArr = aArr.map((v, i)=>+v+ +bArr[i])
    let carry = false
    // 处理结果
    for(let l = ansArr.length, i = l - 1; i >= 0; i--) {
      if (carry) ansArr[i]++
      if (ansArr[i] >= 2) {
        ansArr[i] -= 2
        carry = true;
      } else {
        carry = false;
      }
    }
    // 处理首位
    if (ansArr[0] === 0) ansArr.shift()
    return ansArr.join('')
};
// @lc code=end

