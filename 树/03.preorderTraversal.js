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

// 迭代
const preorderTraversal1 = function(root, res = []) {
  if(!root) return res
  let stack = [root]
  let cur = null
  while(stack.length) {
    cur = stack.pop()
    res.push(cur.val)
    cur.right && stack.push(cur.right)
    cur.left && stack.push(cur.left)
  }
  return res
}
