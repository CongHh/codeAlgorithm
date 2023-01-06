/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = [], queue = []
  queue.push(root)
  if(root === null) return res
  while(queue.length) {
    // 记录当前层的节点数
    let size = queue.length
    // 存放每一层的节点
    let curArr = []
    for(let i = 0;i<size;i++) {
      let node = queue.shift()
      curArr.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(curArr)
  }
  return res
};