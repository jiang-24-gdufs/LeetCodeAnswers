/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  // 循环
  if (!root) return [];
  const stack = [];
  const res = [];

  stack.push(root);

  while (stack.length > 0) {
    const currNode = stack.pop();
    res.push(currNode.val);
    // 前序遍历, 中左右, 需要栈地为右节点
    // if (currNode.right) stack.push(currNode.right)
    // if (currNode.left) stack.push(currNode.left)

    const l = currNode.children.length;
    let i = l - 1;
    if (l > 0) {
      for (; i >= 0; i--) {
        stack.push(currNode.children[i]);
      }
    }
  }

  return res;
};

/* 递归 */
var preorder = function (root) {
  let res = [];
  function traverse(root, arr) {
    arr.push(root.val);
    root.children &&
      root.children.forEach(val => {
        traverse(val, arr);
      });
  }
  root && traverse(root, res);
  return res;
};
// @lc code=end
