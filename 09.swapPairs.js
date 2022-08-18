/**给定一个链表，两两交换其中相邻的节点，并返回交换后的链表 */
var swapPairs = function(head) {
  let ret = new ListNode(0, head), temp = ret
  while(temp.next && temp.next.next) {
    let cur = temp.next.next, pre = temp.next
    pre.next = cur.next
    cur.next = pre
    temp.next = cur
    temp = pre
  }
  return ret.next
}