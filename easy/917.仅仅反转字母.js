/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const swap = (arr, left, right) => {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  };
  const letterReg = /[a-zA-Z]/;

  const len = s.length;
  let left = 0,
    right = len - 1;
  const arr = s.split('');
  while (true) {
    // left步进
    while (left < right && !letterReg.test(arr[left])) {
      left++;
    }
    // right步进
    while (left < right && !letterReg.test(arr[right])) {
      right--;
    }
    if (left >= right) {
      break;
    }

    // 不能步进后交换字母
    swap(arr, left, right);
    left++;
    right--;
  }

  return arr.join('');
};

// FOR
var reverseOnlyLetters = function (s) {
  const swap = (arr, left, right) => {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  };
  const letterReg = /[a-zA-Z]/;

  const len = s.length;

  const arr = s.split('');
  for (let left = 0, right = len - 1; left < right; ) {
    // step to right
    if (left < right && !letterReg.test(arr[left])) {
      left++;
      continue; // next  iteration
    }
    // step to left
    if (left < right && !letterReg.test(arr[right])) {
      right--;
      continue; // next  iteration
    }

    // check break
    if (left >= right) break;

    // swap
    // 不能步进后交换字母
    swap(arr, left, right);
    left++;
    right--;
  }

  return arr.join('');
};

// @lc code=end
