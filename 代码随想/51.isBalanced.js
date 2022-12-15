/***是否是平衡二叉树 递归 */
var isBalanced = function(root) {
  const getDepth = function(node) {
    if(node === null) return 0
    let leftDep = getDepth(node.left)
    if(leftDep === -1) return -1
    let rightDep = getDepth(node.right)
    if(rightDep === -1) return -1
    if(Math.abs(leftDep - rightDep) > 1) {
      return -1
    }else {
      return 1 + Math.max(leftDep, rightDep)
    }
  }
  return !(getDepth(root) === -1)
}