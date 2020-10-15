/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
/* 
 LeetCode 测试用例
 [] -> true
 [1] -> true
*/
var isValidBST = function(root) {
  if (!root) return true;
  let flag = false;
  // check root
  if (root.val > root.left.val && root.val < root.right.val) flag = true;
  return flag && isValidBST(root.left) && isValidBST(root.right)
};
// @lc code=end

