/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  // 拆分
  // 求长，补零
  // 逐位相加（末位起）生产新数组
  // 合并
  let l1 = num1.length, l2 = num2.length
  let lenDiff = l1 - l2; // 判断正数与否
  let absLenDiff = Math.abs(lenDiff)
  let f = lenDiff > 0, arr1, arr2
  if (f) {
    arr1 = num1.split(''), arr2 = ('0'.repeat(absLenDiff) + num2).split('')
  } else {
    arr2 = num2.split(''), arr1 = ('0'.repeat(absLenDiff) + num1).split('')
  }

  const res = arr1.map((v,i)=>+v + +arr2[i]) // type change
  // 解析进位
  res.unshift(0);
  let l = res.length, i = l -1
  let add = 0
  while(i >= 0) {
    let v = res[i] + add
    if (v >= 10) {
      add = 1
      res[i]=v-10
    }else {
      add = 0
      res[i]=v
    }
    i--
  }
  if (res[0] === 0) {
    res.shift()
  }
  return res.join('')
};

// @lc code=end

