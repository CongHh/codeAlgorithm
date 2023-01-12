/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
 * 假设二叉树中至少有一个节点。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 递归
var findBottomLeftValue = function (root) {
  let resNode = null, maxPath = 0
  const dfsTree = function (node, curPath) {
    if (node.left === null && node.right === null) {
      if (curPath > maxPath) {
        maxPath = curPath
        resNode = node.val
      }
    }
    node.left && dfsTree(node.left, curPath + 1)
    node.right && dfsTree(node.right, curPath + 1)
  }
  dfsTree(root, 1)
  return resNode
};


// 迭代
var findBottomLeftValue = function (root) {
  if (root === null) return null
  let queue = [root]
  let resNode
  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if (i === 0) {
        resNode = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return resNode
};