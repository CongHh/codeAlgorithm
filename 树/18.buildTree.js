/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， 
 * postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if(!inorder.length) return null
  let rootVal = postorder.pop()
  let root = new TreeNode(rootVal)
  let rootIndex = inorder.indexOf(rootVal)
  root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex))
  root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex))
  return root
};

// 从前序与中序遍历序列构造二叉树
var buildTree1 = function(preorder, inorder) {
  if(!preorder.length) return null
  let rootVal = preorder.shift()
  let rootIndex = inorder.indexOf(rootVal)
  let root = new TreeNode(rootVal)
  root.left = buildTree1(preorder.slice(0, rootIndex),inorder.slice(0, rootIndex))
  root.right = buildTree1(preorder.slice(rootIndex),inorder.slice(rootIndex + 1))
  return root
};