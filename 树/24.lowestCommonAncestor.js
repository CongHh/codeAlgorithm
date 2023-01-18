/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const travelTree = function (root, p, q) {
    if (root === null || root === p || root === q) return root
    let left = travelTree(root.left, p, q)
    let right = travelTree(root.right, p, q)
    if (left !== null && right !== null) return root
    if (left === null) return right
    return left
  }
  return travelTree(root, p, q)
};

// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
// 递归
var lowestCommonAncestor1 = function (root, p, q) {
  if (root === null) return root
  if (root.val > p.val && root.val > q.val) {
    return root.left = lowestCommonAncestor1(root.left, p, q)
  }
  if (root.val < p.val && root.val < q.val) {
    return root.right = lowestCommonAncestor1(root.right, p, q)
  }
  return root
}

//迭代
var lowestCommonAncestor2 = function (root, p, q) {
  while(root) {
    if(root.val > p.val && root.val > q.val) {
      root = root.left
    }else if(root.val < p.val && root.val < q.val) {
      root = root.right
    } else {
      return root
    }
  }
  return null
}