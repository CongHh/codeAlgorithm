/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。通过修剪二叉搜索树，
 * 使得所有节点的值在[low, high]中。修
 * 剪树 不应该 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 
 * 可以证明，存在 唯一的答案 。
 * 所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */

// 递归
var trimBST = function(root, low, high) {
  if(!root) return null
  if(root.val < low) {
    return trimBST(root.right, low, high)
  }else if(root.val > high) {
    return trimBST(root.left, low, high)
  } else {
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    return root
  }
};

// 迭代
var trimBST1 = function(root, low, high) {
  while(root && (root.val < low || root.val > high)) {
    if(root.val < low) {
      root = root.right
    } else {
      root = root.left
    }
  }
  if(!root) return null
  let cur = root
  while(cur !== null) {
    while(cur.left && cur.left.val < low) {
      cur.left = cur.left.right
    }
    cur = cur.left
  }
  cur = root
  while(cur !== null) {
    while(cur.right && cur.right.val > high) {
      cur.right = cur.right.left
    }
    cur = cur.right
  }
  return root
}