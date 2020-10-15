/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* 
算法复杂度

时间复杂度：访问每个节点恰好一次，时间复杂度为 O(N)O(N) ，其中 NN 是节点的个数，也就是树的大小。
空间复杂度：取决于树的结构，最坏情况存储整棵树，因此空间复杂度是 O(N)O(N)。

*/
var preorderTraversal = function(root) {
  // 循环
  if (!root) return [];
  const stack = [];
  const res = []
  
  stack.push(root);

  while(stack.length > 0) {
      const currNode = stack.pop();
      res.push(currNode.val);
      // 前序遍历, 中左右, 需要栈地为右节点
      if (currNode.right) stack.push(currNode.right)
      if (currNode.left) stack.push(currNode.left)
  }

  return res
};

var preorderTraversal = function(root) {
  // 递归
  let answer = []
  re = function (root) {
      if(!root) return null 
      answer.push(root.val)   
      re(root.left)
      re(root.right)
  }
  re(root)
  return answer 
};
// @lc code=end

