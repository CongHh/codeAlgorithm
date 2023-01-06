/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 * 叶子节点 是指没有子节点的节点。
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// 递归
var binaryTreePaths = function(root) {
  let res = []
  const getPath = function(node, curPath) {
    if(node.left === null && node.right === null) {
      curPath += node.val
      res.push(curPath)
      return
    }
    curPath += node.val + '->'
    node.left && getPath(node.left, curPath)
    node.right && getPath(node.right, curPath)
  }
  getPath(root, '')
  return res
};


// 迭代
var binaryTreePaths1 = function(root) {
  if(!root) return []
  let stack = [root], paths = [''], res = []
  while(stack.length) {
    let node = stack.pop()
    let path = paths.pop()
    if(node.left === null && node.right === null) {
      res.push(path + node.val)
      continue
    }
    path += node.val + '->'
    if(node.right) {
      stack.push(node.right)
      paths.push(path)
    }
    if(node.left) {
      stack.push(node.left)
      paths.push(path)
    }
  }
  return res
};