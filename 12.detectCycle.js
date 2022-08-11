/** 环形指针*/
var detectCycle = function(head) {
  if(!head || !head.next) return null
  // 让快指针比慢指针快一步，这样如果是环形，那必然会相遇
  let fast = head.next.next, slow = head.next
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if(fast == slow) {
      // 相遇时，让通过画图可以得知从头节点和从相遇节点到入口的距离一样
      slow = head
      while( fast != slow) {
        fast = fast.next
        slow = slow.next
      }
      return slow
    }
  } 
  return null
}