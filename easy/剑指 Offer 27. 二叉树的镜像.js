/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if (!root) return root;
    const left = root.left    
    const right = root.right

    root.left = right;
    root.right = left;
    mirrorTree(root.left);    
    mirrorTree(root.right);
    return root
};
//注意：本题与主站 226 题相同：https://leetcode-cn.com/problems/invert-binary-tree/