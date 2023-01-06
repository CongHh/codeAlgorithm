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
 * @return {boolean}
 */

// 递归
const getDepth = function(node) {
  if(node === null) return 0
  let leftDepth = getDepth(node.left)
  let rightDepth = getDepth(node.right)
  if(leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1) {
    return -1
  } 
  return Math.max(leftDepth, rightDepth) + 1
}
var isBalanced = function(root) {
  return !(getDepth(root) === -1)
};