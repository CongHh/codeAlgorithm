/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
const dfs = function (root, res) {
  if (root === null) return
  res.push(root.val)
  dfs(root.left, res)
  dfs(root.right, res)
}
var preorderTraversal = function (root) {
  let res = []
  dfs(root, res)
  return res
};