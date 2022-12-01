/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
 * 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  var bulidTree = function (nums, left, right) {
    if (left > right) {
      return null;
    }
    let mid = Math.floor(left + (right - left) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = bulidTree(nums, left, mid - 1);
    root.right = bulidTree(nums, mid + 1, right);
    return root;
  }
  return bulidTree(nums, 0, nums.length - 1);
};