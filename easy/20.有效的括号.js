/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const chars = s.split('')
    let i = 0, l = chars.length

    if(l%2 == 1) return false

    const matchMap = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    const stack = []
    
    while(i < l) {
        let char = chars[i++]
        if(!(char in matchMap)) { //左符号直接入栈
            stack.push(char)
            continue
        }
        let top = stack[stack.length - 1]
        if(top === matchMap[char]) {  //匹配栈顶的符号, 出栈
            stack.pop()
            continue
        }else{  //不匹配则不是有效字符串
            return false
        }
        
    }
    return stack.length === 0
};
// @lc code=end

