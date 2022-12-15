/*** */
var averageOfLevels = function(root) {
  let res = [], queue = []
  queue.push(root)
  if(root === null) return res
  while(queue.length) {
    let length = len = queue.length
    let sum = 0
    while(length--) {
      let node = queue.shift()
      sum += node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(sum/len)
  }
  return res
}