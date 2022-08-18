/***二叉树层序遍历 */
var levelOrder = function(root) {
  let res = [], queue = []
  queue.push(root)
  if(root === null) {
    return res
  }
  while(queue.length) {
    // 记录当前层级节点数
    let length = queue.length
    // 存放每一层的节点
    let curLevel = []
    for(let i = 0;i<length;i++) {
      let node = queue.shift()
      curLevel.push(node.val)
      // 存放当前层下一层的节点
      node.left&& queue.push(node.left)
      node.right&& queue.push(node.right)
    }
    res.push(curLevel)
  }
  return res
}