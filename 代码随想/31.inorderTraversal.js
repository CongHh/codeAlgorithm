/**中序遍历 */
// 递归
var inorderTraversal = function(root) {
  let res = []
  const dfs = function(root) {
    if(root === null) return
    dfs(root.left)
    res.push(root.val)
    dfs(root.right)
  }
  dfs(root)
  return res
}
// 迭代
varr inorderTraversal = function(root) {
  const stack = []
  let cur = root
  while(stack.length || cur) {
    if(cur) {
      stack.push(cur)
      cur = cur.next
    } else {
      cur = stack.pop()
      stack.push(cur.val)
      cur = cur.right
    }
  }
}