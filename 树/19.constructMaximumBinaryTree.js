/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:
 * 创建一个根节点，其值为 nums 中的最大值。
 * 递归地在最大值 左边 的 子数组前缀上 构建左子树。
 * 递归地在最大值 右边 的 子数组后缀上 构建右子树。
 * 返回 nums 构建的 最大二叉树 。
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const buildTree = function (arr, left, right) {
    if (left > right) return null
    let MaxValue = -1
    let MaxIndex = -1
    for (let i = left; i <= right; i++) {
      if (arr[i] > MaxValue) {
        MaxValue = arr[i]
        MaxIndex = i
      }
    }
    let root = new TreeNode(MaxValue)
    root.left = buildTree(arr, left, MaxIndex - 1)
    root.right = buildTree(arr, MaxIndex + 1, right)
    return root
  }
  let root = buildTree(nums, 0, nums.length - 1)
  return root
};