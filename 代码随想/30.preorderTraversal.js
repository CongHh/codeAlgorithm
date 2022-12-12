/***先序遍历 */

var preorderTraversal = function(root) {
  let res = []
  const dfs = function(root) {
    if(root === null) return
    // 先序遍历从父节点开始
    res.push(root.val)
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)

  return res
}