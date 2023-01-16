/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你两棵二叉树： root1 和 root2 。
 * 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。
 * 你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；
 * 否则，不为 null 的节点将直接作为新二叉树的节点。返回合并后的二叉树。
 * 注意: 合并过程必须从两个树的根节点开始。
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

// 递归
var mergeTrees = function(root1, root2) {
  const preOrder = function(root1, root2) {
    if(!root1) return root2
    if(!root2) return root1
    root1.val += root2.val
    root1.left = preOrder(root1.left, root2.left)
    root1.right = preOrder(root1.right, root2.right)
    return root1
  }
  let root = preOrder(root1, root2)
  return root
};

// 迭代
var mergeTrees1 = function(root1, root2) {
  if(root1 === null) return root2
  if(root2 === null) return root1
  let queue = [root1, root2]
  while(queue.length) {
    let node1 = queue.shift()
    let node2 = queue.shift()
    node1.val += node2.val
    if(node1.left && node2.left) {
      queue.push(node1.left)
      queue.push(node2.left)
    }
    if(node1.right && node2.right) {
      queue.push(node1.right)
      queue.push(node2.right)
    }
    if(!node1.left && node2.left) {
      node1.left = node2.left
    }
    if(!node1.right && node2.right) {
      node1.right = node2.right
    }
  }
  return root1
}