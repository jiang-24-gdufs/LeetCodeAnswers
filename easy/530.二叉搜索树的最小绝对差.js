/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let pre = -1;
  let min = Number.MAX_SAFE_INTEGER;
  const dfs = root => {
      if (!root) return;

      if (root.left) dfs(root.left)

      // 探索至最小节点时标记
      if (pre === -1) {
          pre = root.val; 
      } else {
          // 更新
          min = Math.min(root.val - pre, min)
          pre = root.val
      }

      if (root.right) dfs(root.right)
  }
  dfs(root)
  return min
};
// @lc code=end

