/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 给定一个 N 叉树，找到其最大深度。
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 * N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔。
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
// 递归
var maxDepth = function(root) {
    if(root === null) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
 };

// 迭代 
var maxDepth1 = function(root) {
    let queue = []
    if(root === null) return 0
    let count = 0
    queue.push(root)
    while(queue.length) {
      let size = queue.length
      count ++
      while(size--) {
        let node = queue.shift()
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
      }
    }
    return count
};