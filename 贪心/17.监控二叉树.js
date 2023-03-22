/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定一个二叉树，我们在树的节点上安装摄像头。
 * 节点上的每个摄影头都可以监视其父对象、自身及其直接子对象。
 * 计算监控树的所有节点所需的最小摄像头数量。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function(root) {
  let result = 0
  const traversal = (cur) => {
    if(cur === null) {
      return 2
    }
    let left = traversal(cur.left)
    let right = traversal(cur.right)
    if(left === 2 && right === 2) {
      return 0
    }
    if(left === 0 || right === 0) {
      result++
      return 1
    }

    if(left === 1 || right === 1) {
      return 2
    }
   
    return -1
  }
  if(traversal(root) === 2) {
    result++
  }
  return result
};