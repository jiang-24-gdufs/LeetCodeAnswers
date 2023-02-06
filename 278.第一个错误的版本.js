/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        // 二分 找到第一个isBadVersion(i) 为true的索引
        let left = 1, right = n;
        // [f,f,f,f,f,....f,t,t,t,,t] -> f,【t】,t
        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) { // t
                right = mid
            } else { // 右侧为t
                left = mid + 1
            }
        }
        // left === right
        return left
    };
};
// @lc code=end

