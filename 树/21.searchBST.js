/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。
 * 你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 递归
var searchBST = function(root, val) {
  if(!root || root.val === val) return root
  if(root.val > val) return searchBST(root.left, val)
  if(root.val < val) return searchBST(root.right, val)
};

// 迭代
var searchBST1 = function(root, val) {
  while(root !== null) {
    if(root.val > val) {
      root = root.left
    } else if(root.val < val) {
      root = root.right
    } else {
      return root
    }
  }
  return null
}