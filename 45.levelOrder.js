/*** */
var levelOrder = function(root) {
  let res = [], queue = []
  queue.push(root)
  if(root === null) return res
  while(queue.length) {
    let length = queue.length
    let curLevel = []
    while(length--) {
      let node = queue.shift()
      curLevel.push(node.val)
      for(let item of node.children) {
        item && queue.push(item)
      }
    }
    res.push(curLevel)
  }
  return res
}