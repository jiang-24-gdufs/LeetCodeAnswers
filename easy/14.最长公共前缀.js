/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //逐一与后面的比较
    let pre = strs[0] || '', i = 1, l = strs.length
    while(i < l && pre !== '') {
        let char = strs[i++], 
            preL = pre.length, 
            charL = char.length,
            j = 0, length = preL > charL ? charL : preL,
            newPre = ''
        //compare to get a new pre
        for(; j < length; j++) {
            if(pre[j] === char[j]){
                newPre += pre[j]
            }else{
                break
            }
        }
        pre = newPre
    }
    return pre
};
// @lc code=end

