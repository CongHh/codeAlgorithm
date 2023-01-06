/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你一棵二叉树的根节点 root ，返回树的 最大宽度 。
 * 树的 最大宽度 是所有层中最大的 宽度 。
 * 每一层的 宽度 被定义为该层最左和最右的非空节点（即，两个端点）之间的长度。
 * 将这个二叉树视作与满二叉树结构相同，两端点间会出现一些延伸到这一层的 null 节点，这些 null 节点也计入长度。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  let queue = []
  let width = BigInt(0)
  if(root) {
    width = BigInt(1)
    queue.push(root)
    root.val = BigInt(1)
  }
  while(queue.length > 0) {
    let size = queue.length
    while(size > 0) {
      let node = queue.shift()
      if(node) {
        let val = node.val
        if(node.left) {
          node.left.val = BigInt(2) * val
          queue.push(node.left)
        }
        if(node.right) {
          node.right.val = BigInt(2) * val + BigInt(1)
          queue.push(node.right)
        }
      }
      size --
    }
    if(queue.length > 0) {
      let curWidth = queue[queue.length - 1].val - queue[0].val + BigInt(1)
      if(curWidth > width) {
        width = curWidth
      }
    }
  }
  return width
};

