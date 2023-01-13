/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，
 * 找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */

// 递归
var pathSum = function (root, targetSum) {
  let res = []
  const travelsal = function (node, cnt, path) {
    if (cnt === 0 && !node.left && !node.right) {
      res.push([...path])
    }
    if (!node.left && !node.right) return
    if (node.left) {
      path.push(node.left.val)
      travelsal(node.left, cnt - node.left.val, path)
      path.pop()
    }
    if (node.right) {
      path.push(node.right.val)
      travelsal(node.right, cnt - node.right.val, path)
      path.pop()
    }
    return
  }
  if (!root) return res
  travelsal(root, targetSum - root.val, [root.val])
  return res
};

// 迭代
var pathSum = function(root, targetSum) {
  let res = []
  if(!root) return res
  let nodeArr = [root]
  let valArr = [0]
  let path = [[]]
  while(nodeArr.length) {
    let curNode = nodeArr.shift()
    let curVal = valArr.shift()
    let tempPath = path.shift()
    curVal += curNode.val
    tempPath.push(curNode.val)
    if(!node.left && !node.right && curVal === targetSum) {
      res.push([...path])
    }
    if(node.left) {
      nodeArr.push(node.left)
      valArr.push(curVal)
      path.push([...tempPath])
    }
    if(node.right) {
      nodeArr.push(node.right)
      valArr.push(curVal)
      path.push([...tempPath])
    }
  }
  return res
}