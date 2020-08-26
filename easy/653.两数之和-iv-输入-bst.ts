/*
 * @lc app=leetcode.cn id=653 lang=typescript
 *
 * [653] 两数之和 IV - 输入 BST
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
/**
 * 
 * @param root 
 * @param k 
方法一：使用 HashSet【通过】
最简单的方法就是遍历整棵树，找出所有可能的组合，判断是否存在和为 k 的一对节点。
现在在此基础上做一些改进。在遍历过程中，将每个节点的值都放到一个 setset 中。

对于每个值为 pp 的节点，在 setset 中检查是否存在 k-pk−p。如果存在，那么可以在该树上找到两个节点的和为 kk；否则，将 pp 放入到 setset 中。
 */
const set = new Set();
function findTarget(root: TreeNode | null, k: number): boolean {
  if (!root) return false;

  // if found
  if (set.has(k - root.val)) {
    return true;
  } else {
    // record current node
    set.add(root.val)
  }

  return findTarget(root.left, k) || findTarget(root.right, k)
};
// @lc code=end

