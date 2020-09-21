/*
 * @lc app=leetcode.cn id=538 lang=typescript
 *
 * [538] 把二叉搜索树转换为累加树
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

function convertBST(root: TreeNode | null): TreeNode | null {
  let state = 0;
  function rightRootLeft(root: TreeNode | null): TreeNode | null {
      // 右节点 ~ root ~ 左节点
      if (!root) return null;

      if (root.right) rightRootLeft(root.right); // to the end

      // deal to the middle 
      root.val += state;
      state = root.val;

      if (root.left) rightRootLeft(root.left);

      return root
  }
  return rightRootLeft(root)
};
// @lc code=end

