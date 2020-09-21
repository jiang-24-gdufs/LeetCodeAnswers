/*
 * @lc app=leetcode.cn id=700 lang=typescript
 *
 * [700] 二叉搜索树中的搜索
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// return type 如果不包含undefined则会报编译错误TS2366
function searchBST(root: TreeNode | null, val: number): TreeNode | null | undefined {
  if (!root) return null;

  if (root.val === val) return root;

  // path
  if (val < root.val) return searchBST(root.left, val);
  if (val > root.val) return searchBST(root.right, val);
};
// @lc code=end

