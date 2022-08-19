/*** */
var largestValues = function(root) {
  let res = [], queue = []
  queue.push(root)
  if(root === null) return res
  while(queue.length) {
    let length = queue.length
    let max = queue[0].val
    while(length--) {
      let node = queue.shift()
      max = Math.max(node.val, max)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(max)
  }
  return res
}