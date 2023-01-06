/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 递归
const dfs = function(root, res) {
  if(root === null) return
  dfs(root.left, res)
  dfs(root.right, res)
  res.push(root.val)
}
var postorderTraversal = function(root) {
  let res = []
  dfs(root, res)
  return res
};

// 迭代
const postorderTraversal1 = function(root, res = []) {
  if(!root) return res
  let stack = [root]
  let cur = null
  while(stack.length) {
    cur = stack.pop()
    res.push(cur.val)
    cur.left && stack.push(cur.left)
    cur.right && stack.push(cur.right)
  }
  return res.reverse()
}