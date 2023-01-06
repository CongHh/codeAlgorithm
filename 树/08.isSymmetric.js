
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归
const compare = (left, right)=> {
  if(left === null && right !== null || left !== null && right === null) {
    return false
  }else if(left === null && right === null) {
    return true
  } else if(left.val !== right.val){
    return false
  }
  let outSide = compare(left.left, right.right)
  let inSide = compare(left.right, right.left)
  return outSide && inSide

}
var isSymmetric = function(root) {
  if(root === null) return true
  return compare(root.left, root.right)
}


// 迭代
var isSymmetric = function(root) {
  if(root === null) return true
  let queue = []
  queue.push(root.left)
  queue.push(root.right)
  while(queue.length) {
    let left = queue.shift()
    let right = queue.shift()
    if(left === null && right === null) {
      continue
    } 
    if(left === null || right === null || left.val !== right.val) {
      return false
    }
    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)
  }
  return true
};