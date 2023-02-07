/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定二叉搜索树（BST）的根节点 root 和要插入树中的值 value ，将值插入二叉搜索树。 
 * 返回插入后二叉搜索树的根节点。 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 递归
var insertIntoBST = function (root, val) {
  const setInOrder = function (root, val) {
    if (root === null) {
      let node = new TreeNode(val)
      return node
    }
    if (root.val > val) {
      root.left = setInOrder(root.left, val)
    } else if (root.val < val) {
      root.right = setInOrder(root.right, val)
    }
    return root
  }
  return setInOrder(root, val)
};

// 迭代
var insertIntoBST1 = function (root, val) {
  if (root === null) {
    root = new TreeNode(val);
  } else {
    let parent = new TreeNode(0);
    let cur = root;
    while (cur) {
      parent = cur;
      if (cur.val > val)
        cur = cur.left;
      else
        cur = cur.right;
    }
    let node = new TreeNode(val);
    if (parent.val > val)
      parent.left = node;
    else
      parent.right = node;
  }
  return root;

}