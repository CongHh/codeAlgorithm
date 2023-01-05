/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 * 完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，
 * 其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。
 * 若最底层为第 h 层，则该层包含 1~ 2h 个节点。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归
var countNodes = function(root) {
  if(root === null) return 0
  return 1 + countNodes(root.left) + countNodes(root.right)
};

// 迭代
var countNodes1 = function(root) {
  if(root === null) return 0
  let queue = [root]
  let count = 0
  while(queue.length) {
    let size = queue.length
    count += size
    while(size--) {
      let node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return count
};