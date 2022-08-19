/***给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点 */
var removeNthFromEnd = function (head, n) {
  let ret = new ListNode(0, head)
  let fast = slow = ret
  while(n--) fast = fast.next
  while(fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return ret.next
}