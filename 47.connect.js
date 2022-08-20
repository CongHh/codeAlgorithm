/*** */

var connect = function(root) {
  if(root === null) return root
  let queue = [root]
  while(queue.length) {
    let length = queue.length
    for(let i =0;i<length;i++) {
      let node = queue.shift()
      if(i < length-1) {
        node.next = queue[0]
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
}