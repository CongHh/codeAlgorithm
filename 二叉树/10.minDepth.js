/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归
var minDepth = function(root) {
  if(root == null) return 0
  if(!root.left && !root.right) return 1
  if(!root.left) return 1 + minDepth(root.right)
  if(!root.right) return 1 + minDepth(root.left)
  return 1 + Math.min(minDepth(root.left), Math.min(minDepth(root.right)))
};

// 迭代
var minDepth1 = function(root) {
    if(root === null) return 0
    let queue = [root]
    let depth = 0
    while(queue.length) {
      let size = queue.length
      depth++
      while(size--) {
        let node = queue.shift()
        if(!node.left && !node.right) return depth
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
      }
    }
    return depth
};