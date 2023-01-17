/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
 * 差值是一个正数，其数值等于两值之差的绝对值。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归
var getMinimumDifference = function(root) {
  let arr = []
  const getNodearr = function(root) {
    if(root) {
      getNodearr(root.left)
      arr.push(root.val)
      getNodearr(root.right)
    }
  }
  getNodearr(root)
  let diff = arr[arr.length - 1]
  for(let i = 1,len=arr.length;i<len;i++) {
    if(diff> arr[i] - arr[i-1]) {
      diff = arr[i] - arr[i-1]
    }
  }
  return diff
};

// 递归2
var getMinimumDifference1 = function(root) {
  let res = Infinity
  let preNode = null
  const inorder = function(node) {
    if(!node) return
    inorder(node.left)
    if(preNode) {
      res = Math.min(res, node.val - preNode.val)
    }
    // 记录前一个节点
    preNode = node
    inorder(node.right)
  }
  inorder(root)
  return res
}

// 迭代
var getMinimumDifference2 = function(root) {
  let stack = []
  let cur = root
  let res = Infinity
  let pre = null
  while(stack.length || cur) {
    if(cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      if(pre) {
        res = Math.min(res, cur.val - pre.val)
      }
      pre = cur
      cur = cur.right
    }
  }
}