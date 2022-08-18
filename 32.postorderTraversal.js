/**后序遍历 */
var postorderTraversal = function (root) {
  let res = []
  const dfs = function(root) {
    if(root === null) return
    dfs(root.left)
    dfs(root.right)
    res.push(root.val)
  }
  dfs(root)
  return res
}