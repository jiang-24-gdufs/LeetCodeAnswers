/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function(root) {
  const hash = {};

  function traverse(root) {
      if (!root) return;

      if (hash[root.val]) {
          hash[root.val]++
      } else {
          hash[root.val] = 1
      }

      if (root.left) traverse(root.left)
      if (root.right) traverse(root.right);
  }

  traverse(root);
  console.log(hash)
  let max;
  max = Math.max.apply(null, Object.values(hash));
  const ans = [];
  const keys = Object.keys(hash);
  for(let i = 0, l = keys.length; i < l; i++) {
      if(hash[keys[i]] === max) {
          ans.push(keys[i]);
      }
  }
  return ans
};
// @lc code=end

