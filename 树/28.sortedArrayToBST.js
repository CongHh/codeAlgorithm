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
// 递归
var sortedArrayToBST = function (nums) {
  const buildTree = function (arr, left, right) {
    if (left > right) {
      return null
    }
    let mid = Math.floor(left + (right - left) / 2)
    let root = new TreeNode(arr[mid])
    root.left = buildTree(arr, left, mid - 1)
    root.right = buildTree(arr, mid + 1, right)
    return root
  }
  return buildTree(nums, 0, nums.length - 1)
};

// 迭代
var sortedArrayToBST1 = function (nums) {
  if (nums.length === 0) return null
  let root = new TreeNode(0) // 初始化根节点
  let nodeQue = [root] // 放遍历的节点，并初始化
  let leftQue = [0] // 放左区间的下标，初始化
  let rightQue = [nums.length - 1] // 放右区间的下标
  while (nodeQue.length) {
    let curNode = nodeQue.pop()
    let left = leftQue.pop()
    let right = rightQue.pop()
    let mid = left + Math.floor((right - left) / 2)

    curNode.val = nums[mid]

    // 处理左区间
    if (left <= mid - 1) {
      curNode.left = new TreeNode(0)
      nodeQue.push(curNode.left)
      leftQue.push(left)
      rightQue.push(mid - 1)
    }

    // 处理右区间
    if (right >= mid + 1) {
      curNode.right = new TreeNode(0)
      nodeQue.push(curNode.right)
      leftQue.push(mid + 1)
      rightQue.push(right)
    }
  }
  return root
}