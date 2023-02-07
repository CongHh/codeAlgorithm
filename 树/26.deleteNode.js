/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，
 * 并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if(!root) return null
  if(root.val > key) {
    root.left = deleteNode(root.left, key)
    return root
  }
  if(root.val < key) {
    root.right = deleteNode(root.right, key)
    return root
  } 
  if(root.val === key) {
    // 叶节点
    if(!root.left && !root.right) {
      return null
    }
    // 存在一个孩子节点
    if(root.left && !root.right) {
      return root.left
    }else if(root.right && !root.left) {
      return root.right
    }
    // 两个节点都存在
    let successor = root.right
    // 获取最小节点
    while(successor.left) {
      successor = successor.left
    }
    root.right = deleteNode(root.right, successor.val)
    successor.right = root.right
    successor.left = root.left
    return successor
  }
  return root
};