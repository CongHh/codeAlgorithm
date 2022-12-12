/*** */
var rightSideView = function(root) {
  let res = [], queue = []
  queue.push(root)
  if(root === null) return res
  while(queue.length){
    let length = queue.length
    while(length--) {
      let node = queue.shift()
      if(!length){
        res.push(node.val)
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res
}
console.log(rightSideView([1,2,3,4,5,null,6]));