/*
 * @lc app=leetcode.cn id=806 lang=typescript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
function numberOfLines(widths: number[], S: string): number[] {
  const MaxWidth = 100;
  const dictionary = new Map();
  widths.forEach((width, i)=>{
    dictionary.set(String.fromCharCode(97 + i), width)
  })
  let line = 1, writingIndex = 0
  for (let char of S) {
    const nextWidth = dictionary.get(char);
    if (writingIndex + nextWidth > MaxWidth) {
      writingIndex = nextWidth;
      line++
    } else {
      writingIndex += nextWidth
    }
  }
  return [line, writingIndex]
};
// @lc code=end

