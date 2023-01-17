/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。
 * 如果树中有不止一个众数，可以按 任意顺序 返回。
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let map = new Map()
  const getTreeVal = function(node) {
    if(!node) return
    getTreeVal(node.left)
    map.set(node.val, map.has(node.val) ? map.get(node.val) + 1 : 1 )
    getTreeVal(node.right)
  }
  getTreeVal(root)
  let maxCount = 0
  let res = []
  for (const [key,val] of map) {
    if(val > maxCount) {
      maxCount = val
      res = []
      res.push(key)
    }
  }
  return res
};

var findMode1 = function(root) {
  let res = [], pre = root
  let maxCount = 1, count = 0
  const travelTree = function(cur) {
    if(cur === null) return
    travelTree(cur.left)
    if(pre.val === cur.val) {
      count++
    } else {
      count = 1
    }
    pre = cur
    if(count === maxCount) {
      res.push(cur.val)
    }
    if(count > maxCount) {
      res = []
      res.push(cur.val)
      maxCount = count
    }
    travelTree(cur.right)
  }
  travelTree(root)
  return res
}