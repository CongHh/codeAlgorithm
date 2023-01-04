/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 有效 二叉搜索树定义如下：
 * 节点的左子树只包含 小于 当前节点的数
 * 节点的右子树只包含 大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归
const help = (root, lower, upper) => {
  if(root === null) return false
  if(root.val <= lower || root.val >= upper) {
    return false
  }
  return help(root.left, lower, root.val) && help(root.right, root.val, upper)
}
var isValidBST = function(root) {
  return help(root, -Infinity, Infinity)
};


// 中序遍历
var isValidBST1 = function(root) {
  let stack = []
  let inorder = -Infinity
  while(stack.length || root !== null) {
    while(root !== null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if(root.val <= inorder) {
      return false
    }
    inorder = root.val
    root = root.right
  }
  return true
}