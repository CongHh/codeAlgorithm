/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定二叉树的根节点 root ，返回所有左叶子之和。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归
var sumOfLeftLeaves = function(root) {
  const getLeftLeaves = function(node) {
    if(!node) return 0
    let leftVal = getLeftLeaves(node.left)
    let rightVal = getLeftLeaves(node.right)
    let midVal = 0
    if(node.left && !node.left.left && !node.left.right) {
      midVal =  node.left.val
    }
    return midVal + leftVal + rightVal
  }
  return getLeftLeaves(root)
};

// 迭代
var sumOfLeftLeaves1 = function(root) {
  if(!root) return 0
  let queue = [root]
  let sum = 0
  while(queue.length) {
    let node = queue.shift()
    if(node.left && !node.left.left && !node.left.right) {
      sum += node.left.val
    }
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return sum
}