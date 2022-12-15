/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0 || inorder.length === 0) return null

    let cur = new TreeNode(preorder[0])
    const index = inorder.indexOf(preorder[0])
    cur.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index+1))
    cur.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))
    return cur
};