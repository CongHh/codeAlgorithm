/***递归处理二叉树节点交换 */
var invertTree = function(root) {
  if(!root) return null
  const rightNode = root.right
  root.right = invertTree(root.left)
  root.left = rightNode
  return root
}