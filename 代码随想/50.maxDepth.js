/*** */
var maxDepth = function(root) {
  if(!root) return 0
  let depth = 0
  for(node of root.children) {
    depth = Math.max(depth, maxDepth(node))
  }
  return depth + 1
}

function maxDepth(root) {
  if(root === null) return 0
  let queue = [root]
  let depth = 0
  while(queue.length) {
    let length = queue.length
    depth++
    while(length--) {
      let node = queue.shift()
      for(let item of node.children) {
        item && queue.push(item)
      }
      
    }
  }
  return depth
}