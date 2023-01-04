/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
const dfs = function(root, res) {
  if(root === null) return
  dfs(root.left, res)
  res.push(root.val)
  dfs(root.right, res)
}
var inorderTraversal = function(root) {
  let res = []
  dfs(root, res)
  return res
};

// 迭代
const inorderTraversal1 = function(root, res = []) {
  let stack = []
  let cur = root
  while(stack.length || cur) {
    if(cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      res.push(cur.val)
      cur = cur.right
    }
  }
  return res
}