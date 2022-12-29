/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 给你一个单链表的头节点 head ，
 * 请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const vals = []
  while(head !== null) {
    vals.push(head.val)
    head = head.next
  }
  for(let i = 0,j = vals.length - 1;i< j;i++,j--) {
    if(vals[i] !== vals[j]) {
      return false
    }
  }
  return true
};

// 快慢指针
// 找到前半部分链表的尾节点。
// 反转后半部分链表。
// 判断是否回文。
// 恢复链表。
// 返回结果。
const reverseList = (head) => {
  let prev = null
  let curr = head
  while(curr !== null) {
    let tempCurr = curr.next
    curr.next = prev
    prev = curr
    curr = tempCurr
  }
  return prev
}
const endOfFirstHalf = (head) => {
  let fast = head
  let slow = head
  while(fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
var isPalindrome1 = function(head) {
  if(head === null) return true
  // 找到前半部分链表的尾节点并反转后半部分链表
  const firstHalfEnd = endOfFirstHalf(head)
  const secondHalfStart = reverseList(firstHalfEnd.next)

  // 判断是否回文
  let p1 = head
  let p2 = secondHalfStart
  let result = true
  while(result && p2 !== null) {
    if(p1.val !== p2.val) result = false
    p1 = p1.next
    p2 = p2.next
  }
  // 还原链表并返回结果
  firstHalfEnd.next = reverseList(secondHalfStart)
  return result
};
