/**
 * reverseList
 */

var reverseList = function (head) {
  if(!head || !head.next) return head
  let pre = null,temp = null,cur = head
  while(cur) {
    temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return cur
}